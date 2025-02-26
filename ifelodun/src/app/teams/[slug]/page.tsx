import Image from "next/image";
import Link from "next/link";
import { cabinet } from "../../../data/cabinet";
import { notFound } from "next/navigation";

const TeamPage = ({ params }) => {
  const { slug } = params;

  // Check if the slug matches a category
  const categoryData = cabinet.find((team) => team.slug === slug);
  if (categoryData) {
    return (
      <div className="p-8 max-w-5xl mx-auto bg-gray-50 ">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">{categoryData.category}</h1>
        <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categoryData.members.map((member) => (
            <li key={member.slug} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
              <Link href={`/teams/${member.slug}`} className="block text-center">
                <div className="w-[180px] h-[180px] mx-auto mb-4 overflow-hidden rounded-full">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    width={180} 
                    height={180} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
                <p className="text-gray-500">{member.role}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Check if the slug matches a member
  let memberData;
  for (let team of cabinet) {
    memberData = team.members.find((m) => m.slug === slug);
    if (memberData) break;
  }

  if (memberData) {
    return (
      <div className="p-8 max-w-3xl mx-auto text-center  shadow-lg rounded-lg mt-6">
        <div className="w-[220px] h-[220px] mx-auto mb-6 overflow-hidden rounded-full border-4 border-gray-300">
          <Image 
            src={memberData.image} 
            alt={memberData.name} 
            width={220} 
            height={220} 
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">{memberData.name}</h1>
        <p className="text-gray-500 text-lg mb-4">{memberData.role}</p>
        <div className="flex justify-center gap-6 mt-4">
          {memberData.socials?.twitter && (
            <a href={`https://twitter.com/${memberData.socials.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg font-semibold hover:underline">
              Twitter
            </a>
          )}
          {memberData.socials?.linkedin && (
            <a href={`https://${memberData.socials.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg font-semibold hover:underline">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    );
  }

  return notFound();
};

export default TeamPage;
