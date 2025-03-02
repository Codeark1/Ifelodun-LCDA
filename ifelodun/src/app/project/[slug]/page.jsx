"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { Tabs, Card, Modal } from "antd";
import { Image as AntImage } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import Image from "next/image";
import { categories } from "../../../data/category";
import { ConfigProvider } from "antd";

export default function CategoryTabs() {
  const params = useParams();
  const slug = params?.slug;

  const category = useMemo(() => categories.find((cat) => cat.slug === slug), [slug]);

  if (!category) return <p className="text-center text-red-500">Category not found.</p>;

  const [activeTab, setActiveTab] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  const items = [
    {
      key: "All",
      label: "All",
      children: (
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} onClick={() => handleCategoryClick(cat)} />
          ))}
        </div>
      ),
    },
    {
      key: category.name,
      label: category.name,
      children: (
        <Tabs
          className="px-4"
          defaultActiveKey={category.subCategories[0]?.key}
          items={category.subCategories.map((subCategory) => ({
            key: subCategory.key,
            label: subCategory.label,
            children: <ImageGrid images={subCategory.images} />,
          }))}
        />
      ),
    },
  ];

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-700">{category.name}</h1>
      <p className="text-gray-600 mb-8 text-lg">Explore programs related to {category.name}.</p>

      <ConfigProvider
  theme={{
    components: {
      Tabs: {
        itemColor: "#4CAF50", 
        itemActiveColor: "red", 
        itemHoverColor: "#1c1c1c", 
        inkBarColor: "#1c1c1c", 
        fontSize: 20, 
        fontWeight: "900",
        fontFamily: "var(--font-plus-jakarta)"
      },
    },
  }}
>
  <div className=" font-sans">
    <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} centered />
  </div>
</ConfigProvider>





      <CategoryModal
        visible={modalVisible}
        category={selectedCategory}
        onClose={() => setModalVisible(false)}
      />
    </div>
  );
}


function CategoryCard({ category, onClick }) {
  const imageCount = useMemo(
    () => category.subCategories.reduce((acc, sub) => acc + sub.images.length, 0),
    [category]
  );

  return (
    <Card
      hoverable
      className="relative rounded-lg transition transform hover:scale-105 w-80"
      cover={
        <div className="relative">
          <Image
            src={category.coverImage}
            alt={category.name}
            className="w-full h-48 object-cover rounded-t-md"
            width={500}
            height={192}
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <CameraOutlined /> {imageCount}
          </div>
        </div>
      }
      onClick={onClick}
    >
      <div className="text-lg font-semibold text-center">{category.name}</div>
    </Card>
  );
}

// ✅ Extracted Image Grid Component
function ImageGrid({ images }) {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-4">
      {images.map((item, index) => (
        <Card
          key={index}
          hoverable
          className="h-fit transition transform hover:scale-105 w-72"
          cover={
            <div className="relative">
              <AntImage
                src={item.url}
                alt={item.label}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <div className="w-full bg-black bg-opacity-50 text-white text-center p-2">
                {item.label}
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
}

// ✅ Extracted Modal Component
function CategoryModal({ visible, category, onClose }) {
  if (!category) return null;

  return (
    <Modal
      title={category?.name}
      open={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      centered
    >
      <Tabs
        defaultActiveKey={category.subCategories[0]?.key}
        items={category.subCategories.map((subCategory) => ({
          key: subCategory.key,
          label: subCategory.label,
          children: <ImageGrid images={subCategory.images} />,
        }))}
      />
    </Modal>
  );
}
