import React from "react";
import mapLogo from "../assets/img.jpeg";

const AdobeDesign = () => {
  return (
    <div>
      <div className="w-full h-[416px] bg-gray-500 ">
        {/* navbar */}
        <div className="w-full flex justify-between p-8 text-white bg-gray-900">
          <p>Logo</p>
          <div className="flex justify-between ">
            <p className="mx-4"> اتصل بنا</p>
            <p className="mx-4"> جدول</p>
            <p className="mx-4"> دورة</p>
            <p className="mx-4"> بيت</p>
          </div>
          <div className="flex justify-between align-bottom">
            <p className="mx-4 pt-2">تسجيل الدخول</p>
            <p className="bg-green-500  text-white font-bold py-2 px-4 rounded ">
              اشتراك
            </p>
          </div>
        </div>
      </div>
      {/* Form */}

      <div className="flex justify-center items-center border border-green-900 rounded-md my-[65px] w-[1320px]  m-auto p-4">
        <form class="w-full m-8">
          <div class="w-full mb-6 flex">
            <div className=" w-full flex flex-col mr-2">
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                اسم
              </label>
              <input
                type="text"
                placeholder="اسمأدخل أسمك"
                class="block w-full px-3 py-2 rounded-md border border-green-800 mr-2"
              ></input>
            </div>

            <div className=" w-full flex flex-col mrl-2">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-green-700 "
              >
                بريد إلكتروني{" "}
              </label>
              <input
                type="password"
                placeholder="أدخل بريدك الإلكتروني"
                class="block w-full px-3 py-2 rounded-md border border-green-800 "
              ></input>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-700 "
            >
              رسالة
            </label>
            <textarea
              id="message"
              placeholder="أدخل رسالتك"
              rows="4"
              class="block w-full px-3 py-2 rounded-md border border-green-800 "
            ></textarea>
          </div>
          <button
            type="submit"
            class=" px-3 py-2 rounded-md bg-green-500 text-white font-medium "
          >
            أرسل رسالة
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center  my-[65px] w-[1320px]  m-auto p-4">
        <div className="w-full flex flex-col mrl-2">
          <label className="text-lg font-medium text-indigo-900">تجدنا</label>
          <img src={mapLogo} width={1320} height={80} alt="map"></img>
        </div>
      </div>
    </div>
  );
};

export default AdobeDesign;
