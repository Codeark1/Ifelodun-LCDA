"use client";
import { leadershipHistory } from "../../data/leadershipHistory";
import { caretaker } from "../../data/caretaker";

import { Collapse } from "antd";
import Image from "next/image";


const Page = () => {
  return (
    <div className="p-6 lg:p-10">
      <div className="space-y-6">
        {/* Title Section */}
        <h1 className="text-3xl font-extrabold text-gray-800">
          HISTORY OF IFELODUN
        </h1>

        {/* Description Section */}
        <p className="text-base text-gray-700 leading-relaxed">
          Ifelodun Local Council Development Area (L.C.D.A) was carved out of
          the Ajeromi–Ifelodun Local Government Area (L.G.A) with Administrative
          Headquarter at 3, Dispensary Street, Mosafejo, Amukoko, Lagos State.
          Ifelodun LCDA has two coordinating area offices: one at “Layeni Area
          Office” situated at Ojo Road (Oja Bus-stop), and the second, “Amukoko
          Area Office,” is situated inside the Ifelodun L.C.D.A headquarters at
          Mosafejo, Amukoko.
        </p>

        <p className="text-base text-gray-700 leading-relaxed">
          The Ifelodun L.C.D.A is geographically bounded at the north by Amuwo
          Local Government, at the east by Coker-Aguda L.C.D.A, at the south by
          Apapa-Iganmu L.C.D.A, and at the west by Ajeromi-Ifelodun Local
          Government Area.
        </p>

        <p className="text-base text-gray-700 leading-relaxed">
          Like any other Local Government in Nigeria, Ifelodun L.C.D.A consists
          of many towns and settlements such as Amukoko/Mosafejo Town, Layeni
          Town, Abule-Kere Town, Alaba-Oro Town, Dodoro Alafia Town, Oke-Ira
          Town, Sheteolu Town, and many more.
        </p>

        <p className="text-base text-gray-700 leading-relaxed">
          When Ifelodun and other LCDAs in Lagos State were created by then
          Governor Bola Ahmed Tinubu, they were not approved by the Federal
          Government under Chief Olusegun Obasanjo. This led to the withholding
          of local government allocations in Lagos State. However, Tinubu
          continued to fund the LCDAs despite these challenges, ensuring their
          sustainability. Today, Ifelodun LCDA remains a success story.
        </p>

        <p className="text-base text-gray-700 leading-relaxed">
          When Ifelodun LCDA was officially established, Hon. (Prince) Taiwo
          Oyewole Adenekan was sworn in as the first administrator on November
          27, 2003.
        </p>

        {/* Leadership Section */}
        <h2 className="text-2xl font-semibold mt-8">Past Leadership</h2>
        <Collapse
          accordion
          items={leadershipHistory}
          className="bg-white shadow-lg rounded-lg p-4"
        />
      </div>
      <div className=" space-y-6 pt-5">
        <h2 className=" font-bold">CARETAKER COMMITTEE</h2>
        <p>
          On Monday 5th January 2015, another political chapter was opened in
          the Ifelodun L.C.D.A, when the then Executive Governor Lagos State H/E
          Mr. Babatunde Raji Fashola (SAN) sworn in new fifty-seven (57)
          executive secretaries to manage the affairs of all twenty (20) L.G.A’s
          thirty-seven (37) L.C.D.A’s in Lagos State.
        </p>

        <p>
          Hon. Adigun Adebayo Wahab was chosen and sworn in to head a five
          caretaker committee member namely. Hon. Olasupo Adeshina, Alhaji
          (Hon.) Hassan Adeniji, Hon. Aroboto Lookman and Hon. (Mrs) Dare Okeme.
          The committee also appointed Alhaji Nuru Mohammed to supervise the
          revenue collection for the L.C.D.A as Revenue Chairman, the tenure
          came to an end on 13th June 2016 when a sole administrator was sworn
          in.
        </p>

        <Collapse
          accordion
          items={caretaker}
          className="bg-white shadow-lg rounded-lg p-4"
        />
      </div>
      <div className="space-y-6">
        <h1 className="font-bold pt-4">SOLE ADMINISTRATORSHIP</h1>

        <p>
          On 13th June 2016 a sole administrator in person of Hon. John Femi
          Olumuyiwa (JP) was sworn in by H/E Mr. Akinwunmi Ambode alongside
          other fifty-six sole administrators to replace the caretaker committee
          and manage the Ifelodun L.C.D.A affairs until new elected local
          government executive will be sworn in. Governor Akinwumi Ambode’s
          message to the sole administrators
        </p>

        <p className=" italic">
          “Your job is to go to the local government you have been posted to and
          make a different in the lives of the people. You must touched by our
          people. You must interact with the people, share in their joy and
          pains and reside among them. It is only through this symbolic
          relationship that we can truly say we have begun to understand and
          serve our people”
        </p>
      </div>
      <div className=" space-y-3">
        <p className=" font-bold pt-6">WHO IS HON. JOHN FEMI OLUMUYIWA (JP)</p>

        <p>
          Born on 15th October 1978, a native of Ibadan in the Ibadan North East
          Local Government Area of Oyo State. He started his educational career
          at Metropolitan Primary School, Orile-Iganmu, where he sat for his
          First School Leaving Certificate Examination in 1992, He processed to
          Araromi Secondary school Orile-Iganmu, where he sat for his West
          African Examination, Youn Femi John attended the polytechnic Ibadan.
          Oyo State, state, where he bagged his Ordinary National Diploma (OND)
          in business studies in 2007. The amiable and young Olumuyiwa John also
          attended University of Ibadan Oyo State for his B.sc (Hon.) in
          Political Science (in view).
        </p>

        <p>
          At the Government level, Hon. John Olumuyiwa has served the Ifelodun
          L.C.D.A in various notable capacities such as personal Assistant to
          the chairman 2003 – 2007, Senior Special Assistant to the chairman
          2007 – 2010, supervisor for budget planning and statistics Ifelodun
          L.C.D.A 2012 – 2014. He was appointed as Sole Administrator for the
          Ifelodun L.C.D.A on 13th June2016, by the then Governor of Lagos State
          H/E Mr. Akinwumi Ambode.
        </p>

        <p>
          At the political level, Hon. Olumuyiwa was at a time member of the now
          defunct UNCP, AD, Youth leader for the Ifelodun L.C.D.A, AC and also
          its Badagry Divisional Youth leader, the offices he also occupied
          during the regime of CAN, He was also the Ifelodun L.C.D.A Youths
          leader for the APC till when appointed a supervisor for the L.C.D.A.
          Hon. John Olumuyiwa Femi is a Christian, happily married with lovely
          children.
        </p>

        <p>
          The Fourth Local Government Elections in the Ifelodun L.C.D.A was held
          on 22nd July 2017 where the following Experienced Democrats were
          elected.
        </p>

        <ul className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Executive Chairman:</strong> Hon. Shuaib Fatai Ajidagba
          </li>
          <li>
            <strong>Vice Chairman:</strong> Hon. Kolesho Olatunbosun Nurudeen
          </li>
          <li>
            <strong>Leader of the Legislative Arm:</strong> Hon. Salaudeen
            Fatimoh Atinuke – Ward D
          </li>
          <li>
            <strong>Councillor:</strong> Hon. Abdulsalam Aweda Ibrahim – Ward F
          </li>
          <li>
            <strong>Councillor:</strong> Hon. Sikirullahi Amusa Kuti – Ward E
          </li>
          <li>
            <strong>Councillor:</strong> Hon. Hassan Adewale Sulaimon – Ward A
          </li>
          <li>
            <strong>Councillor:</strong> Hon. Sulaimon Wahab Bolajoko – Ward B
          </li>
          <li>
            <strong>Councillor:</strong> Hon. Adeola Adebayo Wasiu – Ward C
          </li>
          <li>
            <strong>Councillor:</strong> Hon. Aweda Akeem Odunbaku – Ward G
          </li>
        </ul>

        <h2 className="text-base font-bold  mb-4">
          The following appointments were then made by the elected democrats
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Secretary to the Local Govt (SLG):</strong> Hon. Garuba
            Adeola Adebayo
          </li>
          <li>
            <strong>Supervisor for Health:</strong> Hon. Fasasi Olaleye
          </li>
          <li>
            <strong>Supervisor for Health:</strong> Hon. Sobowale M.O
          </li>
          <li>
            <strong>Supervisor for Agriculture:</strong> Hon. Lateef Ojora
            Adejiyan
          </li>
          <li>
            <strong>Supervisor for Agriculture:</strong> Hon. Idiat Bode
          </li>
          <li>
            <strong>Supervisor for Budget & Planning:</strong> Hon. Late Dr.
            Popoola (Replaced by Hon. Jimoh Ayuba)
          </li>
          <li>
            <strong>Special Adviser on Community Affairs:</strong> Hon. Kabiru
            Bolakale Lawal
          </li>
          <li>
            <strong>Chairman Revenue Committee:</strong> Hon. Muyideen Shittu
          </li>
          <li>
            <strong>Chairman Market Committee:</strong> Hon. Awope Debo
          </li>
        </ol>

        <p>
          Another Local Government Election in Lagos State and The Fifth Local
          Government Election in the Ifelodun L.C.D.A was held on Saturday, 24th
          July, 2021 where the following Democrats were elected on the platform
          of the All Progressive (APC) party, the Chairman and his vice were
          sworn in with others in the remaining fifty six L.G.A and L.C.D.A in
          Lagos State on Tuesday 27th July 2021 by His excellency Mr. Babajide
          Sanw-olu, Executive Governor of Lagos State.
        </p>

        <h2 className="text-base font-bold  mb-4">
          APPOINTEES OF IFELODUN L.C.D.A ON 8TH APRIL 2022
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>Executive Chairman:</strong> Hon. (Mayor) Olufemi Akanbi
            Okeowo (Igbayilayomide)
          </li>
          <li>
            <strong>Vice Chairman (Deceased - 22nd Dec. 2021):</strong> Hon.
            (Alh) Ojora Abdul-lateef Adejiyan (Duduyemi)
          </li>
          <li>
            <strong>Councilor Ward A:</strong> Hon. (Alh) Hassan Adewale
            Sulaimon
          </li>
          <li>
            <strong>Councilor Ward B:</strong> Hon. Bolajoko Sulaimon
          </li>
          <li>
            <strong>Councilor Ward C:</strong> Hon. (Alh) Adeleye Sulaimon
            Adelaja
          </li>
          <li>
            <strong>Councilor Ward D (Leader):</strong> Hon. (Mrs) Saludeen
            Fatimo Tinuke
          </li>
          <li>
            <strong>Councilor Ward E:</strong> Hon. (Mrs) Adebayo Blessing Alaba
          </li>
          <li>
            <strong>Councilor Ward F:</strong> Hon. Ilesanmi Elijah Oluwatosin
          </li>
          <li>
            <strong>Councilor Ward G:</strong> Hon. Kazeem Sulaimon
          </li>
        </ol>

        <p>
          After the death of Hon.. (Alh) Ojora Abdul – Lateef Adejiyan
          (Duduyemi), the Vice Chairman on 22nd of December 2021, his wife
          Alhaja (Hon.) Mrs Adetoun Ojora Adejiyan was unanimously chosen and
          Health of the L.C.D.A. The elected democrats also appointed the under
        </p>

        <p>
          Listed party faithful to assist in the smooth day to day running of
          the L.C.D.A programmes of activities.
        </p>

        <h2 className="text-base font-bold mb-4">
          Appointees of Ifelodun L.C.D.A (8th April 2022)
        </h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            <strong>SLG:</strong> Hon. Rasheed O. Rahman
          </li>
          <li>
            <strong>Supervisor for WAPA:</strong> Hon. Princess Ariyo Bola
          </li>
          <li>
            <strong>Supervisor for Work:</strong> Hon. Olaosebikan James
          </li>
          <li>
            <strong>Supervisor for Chieftaincy / Community Affairs:</strong>{" "}
            Hon. (Alh.) Nuru Muhammed
          </li>
          <li>
            <strong>Supervisor for Environment:</strong> Hon. (Mrs) Oyefolu
            Medinat
          </li>
          <li>
            <strong>Supervisor for Transport & Logistics:</strong> Hon. (Alh)
            Daud I.B. Somotan
          </li>
          <li>
            <strong>Supervisor for Agric:</strong> Hon. Aransi Saheed Ademola
          </li>
          <li>
            <strong>Supervisor for Education:</strong> Hon. Rahmon Ajao
          </li>
          <li>
            <strong>Special Adviser on Budget & Planning:</strong> Hon. (Alh)
            Sanni L. Mustapha
          </li>
          <li>
            <strong>Special Adviser on Special Duties:</strong> Hon. (Alh)
            Maiyegun Hammed O.
          </li>
          <li>
            <strong>Special Adviser on Health & Community Services:</strong>{" "}
            Hon. (Dr) Oyedun A. Rapheal
          </li>
          <li>
            <strong>Chairman Market Committee:</strong> Alhaji Tajudeen Yekeen
          </li>
          <li>
            <strong>Chairman Revenue Committee:</strong> Mr. Opadeji Opeyemi
          </li>
        </ol>
      </div>
      <div className="w-full mx-auto p-6 bg-white rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Section */}
          <div className="">
            <Image
              src="/images/chairman.jpg" // Replace with actual image path
              alt="Mayor Olufemi Akanbi Okeowo"
              width={400} // Set appropriate width
              height={500} // Set appropriate height
              className="w-full md:w-[80%] h-auto rounded-lg shadow-md"
              priority // Loads image faster
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              WHO IS MAYOR OLUFEMI AKANBI OKEOWO (IGBAYILAYOMIDE)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mayor Olufemi Okeowo (aka Golden Dove) was born in the last
              quarter of the 50s in Lagos Island (Ile-Eleye), though a native of
              Idofian town in Ifelodun Local Government Area of Kwara State. He
              had his Primary and Secondary education in Lagos Island and
              attended Lagos Polytechnic, Yaba.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mayor Okeowo is a master's degree holder in shipping and a
              professional sales purchase and monitoring consultant. In 1983, he
              traveled abroad to further his education and pursue a professional
              football career. He returned to Nigeria in the early 90s and
              became politically active.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A strong believer in perseverance, Mayor Okeowo has remained a
              formidable and consistent political figure. He was the Local
              Government Coordinator for the Sanwo-Olu Hamzat Governorship
              Campaign in 2019. He follows the wise words of Abraham Lincoln:{" "}
              <span className="italic text-sm font-bold">
                “i will study and prepare myself and someday, i know my chance
                will come”. and that of charles c. noble whose thought say; “you
                must have long-range goals to keep you from being frustrated by
                short-range goal failure”
              </span>
            </p>
            <p className="text-gray-700">
              In all his aspiration failures, Mayor Okeowo (aka Igbayilayomide)
              still stands like Iroko tree politically believing that his time
              will surely come one day.{" "}
            </p>
            <p className="text-gray-700">
              So it was not a surprise when he contested under the APC Local
              Government Primary Election for the Ifelodun L.C.D.A chairmanship
              alongside sixteen other viable and qualified aspirants in 2021 and
              he eventually won the Local government Chairmen. In Lagos by H/E
              Mr. Babajide Olushola Sanwo- Olu, The Executive Governor of Lagos
              State on Tuesday 27th July 2021.
            </p>

            <p className="text-gray-700">
              Hon (Mayor) Olufemi Akanbi Okeowo is a devoted and practicing
              Christian, loved by everyone around him for his frankness,
              dedication to duty, open door policy, non – discrimination against
              tribe, language, religion and gender.
            </p>


            <p className="text-gray-700">Mayor Olufemi Okeowo Akanbi is an amiable Family man. Married to Chief Mrs. Okeowo and the union was blessed with Godly, amiable and cherished children 
	(TRULY IGBAYILAYO SESE DE)
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
