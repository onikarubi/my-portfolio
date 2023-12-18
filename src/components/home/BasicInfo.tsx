import React from 'react';
import { FaUserAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaTrain, FaBriefcase } from 'react-icons/fa';
import { MdCake } from 'react-icons/md';

const BasicInfo = () => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaUserAlt className="text-blue-600" /> 基本情報
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <InfoItem icon={<FaUserAlt className="text-green-600" />} label="氏名" value="竹内 翼" />
        <InfoItem icon={<FaUserAlt className="text-purple-600" />} label="かな" value="たけうち つばさ" />
        <InfoItem icon={<MdCake className="text-orange-600" />} label="生年月日" value="2001/11/19" />
        <InfoItem icon={<FaEnvelope className="text-red-600" />} label="メールアドレス" value="printuserselect@gmail.com" />
        <InfoItem icon={<FaPhone className="text-blue-600" />} label="電話番号" value="09036031761" />
        <InfoItem icon={<FaMapMarkerAlt className="text-yellow-600" />} label="地域" value="関東 東京都" />
        <InfoItem icon={<FaTrain className="text-gray-600" />} label="最寄り駅" value="JR常磐線(上野～取手) 金町駅, 京成金町線 京成金町駅" />
        <InfoItem icon={<FaBriefcase className="text-green-600" />} label="現在の状況" value="フリーランス" />
      </div>
    </div>
  );
};

const InfoItem = (props: { icon: any, label: string, value: any }) => (
  <div className="flex items-center gap-2">
    {props.icon}
    <div>
      <strong>{props.label}:</strong> {props.value}
    </div>
  </div>
);

export default BasicInfo;
