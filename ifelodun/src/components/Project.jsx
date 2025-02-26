import { useState } from "react";
import { Card, Modal } from "antd";
import { Image as AntImage } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import Image from "next/image";
import { categories } from "../data/category";

export default function CategoryTabs() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setModalVisible(true);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6 text-green-600">
        Our Programs & Initiatives
      </h1>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
        Discover various programs we offer, ranging from education and healthcare to empowerment and agriculture.
      </p>

      {/* First row (3 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center mx-auto max-w-5xl">
        {categories.slice(0, 3).map((category) => (
          <CategoryCard key={category.id} category={category} onClick={() => handleCategoryClick(category)} />
        ))}
      </div>

      {/* Second row (2 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 justify-center items-center mx-auto max-w-4xl">
        {categories.slice(3, 5).map((category) => (
          <CategoryCard key={category.id} category={category} onClick={() => handleCategoryClick(category)} />
        ))}
      </div>

      {/* Modal for selected category */}
      <Modal
        title={<span className="text-lg sm:text-xl font-semibold text-gray-800">{selectedCategory?.name}</span>}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
        width={900}
        className="max-w-full"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {selectedCategory?.subCategories.map((subCategory) => (
            <ImageGrid key={subCategory.key} images={subCategory.images} />
          ))}
        </div>
      </Modal>
    </div>
  );
}

function CategoryCard({ category, onClick }) {
  return (
    <Card
      hoverable
      className="relative rounded-lg text-gray-900 overflow-hidden transition-transform transform hover:scale-105"
      cover={
        <div className="relative h-48 sm:h-56">
          <Image
            src={category.coverImage}
            alt={category.name}
            className="w-full h-full object-cover"
            width={500}
            height={192}
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 sm:px-3 py-1 rounded-lg flex items-center gap-1 shadow-sm">
            <CameraOutlined /> {category.subCategories.reduce((acc, sub) => acc + sub.images.length, 0)}
          </div>
        </div>
      }
      onClick={onClick}
    >
      <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">
        {category.name}
      </div>
    </Card>
  );
}

function ImageGrid({ images }) {
  return (
    <>
      {images.map((item, index) => (
        <Card
          key={index}
          hoverable
          className="h-fit transition-transform transform hover:scale-105 shadow-sm overflow-hidden rounded-lg"
          cover={
            <div className="relative h-32 sm:h-40">
              <AntImage
                src={item.url}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-center p-2 w-full text-xs sm:text-sm font-semibold">
                {item.label}
              </div>
            </div>
          }
        />
      ))}
    </>
  );
}
