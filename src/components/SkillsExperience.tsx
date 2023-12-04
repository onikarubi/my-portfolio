import React from 'react';
import { FaCode, FaLaptopCode, FaIndustry, FaGithub, FaUserTie, FaReact, FaTools } from 'react-icons/fa';
import { SiJavascript, SiPython, SiTypescript, SiDocker, SiGithub, SiCss3, SiHtml5 } from 'react-icons/si';

const SkillsExperience = () => {
  const prText = `私はフロントエンド開発における豊富な経験と多岐にわたる技術スキルを持つエンジニアとして、ユーザー中心のインタラクティブなウェブアプリケーションの構築に情熱を注いでいます。
  特に、HTML、CSS、JavaScriptを用いたリッチなUIの開発において、3年以上の経験があります。ReactとNext.jsを駆使し、現代的で応答性の高いウェブインターフェースを設計・実装してきました。
  さらに、SassやTypeScriptなどの先進的なフロントエンド技術も活用して、より効率的で読みやすいコードを書くことに重点を置いています。これらのスキルは、プロジェクトの要件を正確に捉え、ユーザーに最適なエクスペリエンスを提供するために不可欠です。
  加えて、バックエンドとの連携においても、PythonやNode.jsの知識を生かし、フルスタック開発のプロジェクトにも積極的に参加してきました。AWSの基礎知識とDockerを用いたアプリケーションのデプロイメントにも携わり、開発から運用までの幅広い工程に理解を持っています。
  チームプロジェクトにおいては、GitHubを活用した効果的なバージョン管理とコラボレーションを通じて、チームメンバーと密に連携し、プロジェクトを成功に導いてきました。常に新しい技術の習得にも積極的であり、最新のトレンドを取り入れた開発を行うことで、プロジェクトに革新的なアプローチをもたらしています。`;

  const paragraphs = prText.split('。').filter(p => p).map((p, index) => <p key={index}>{p}。</p>);

  return (
    <div className="bg-white shadow-xl rounded-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FaCode className="text-blue-600" /> 開発スキル・経験
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
        <p className="flex items-center gap-2">
          <FaLaptopCode className="text-green-600" /><strong>経験職種:</strong> フロントエンド, サーバーサイド, LLMチャットアプリ
        </p>
        <p className="flex items-center gap-2">
          <FaIndustry className="text-purple-600" /><strong>経験業界:</strong> WEBサービス
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          {/* 言語 */}
          <div className="col-span-1 md:col-span-2">
            <strong className="flex items-center gap-2">
              <SiJavascript className="text-yellow-500" /> 言語:
            </strong>
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillTag skill="SCSS" years="3年" />
              <SkillTag skill="JavaScript" years="4年" />
              <SkillTag skill="Python" years="3年" />
              <SkillTag skill="TypeScript" years="2年" />
              <SkillTag skill="Java" years="2年" />
              <SkillTag skill="PHP" years="2年" />
              <SkillTag skill="Ruby" years="2年" />
            </div>
          </div>

          {/* フレームワーク */}
          <div className="col-span-1 md:col-span-2">
            <strong className="flex items-center gap-2">
              <FaReact className="text-teal-500" /> フレームワーク:
            </strong>
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillTag skill="LangChain" years="1年" />
              <SkillTag skill="React" years="2年" />
              <SkillTag skill="Next.js" years="1年" />
              <SkillTag skill="Fast API" years="2年" />
              <SkillTag skill="Ruby on Rails" years="2年" />
              <SkillTag skill="Spring Boot" years="1年" />
            </div>
          </div>

          {/* ツール */}
          <div className="col-span-1 md:col-span-2">
            <strong className="flex items-center gap-2">
              <FaTools className="text-gray-500" /> ツール:
            </strong>
            <div className="flex flex-wrap gap-2 mt-2">
              <SkillTag skill="Docker" years="2年" />
              <SkillTag skill="GitHub" years="3年" />
              {/* 他のツールも追加 */}
            </div>
          </div>
        </div>
        <p className="flex items-center gap-2 col-span-1 md:col-span-2">
          <FaGithub className="text-black" />
          <strong>ポートフォリオ・GitHub:</strong>
          <a href="https://github.com/onikarubi?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 ml-2">GitHub</a>
        </p>
        <div className="mt-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <FaUserTie className="text-red-600" /> 自己PR
          </h3>
          <div className="text-gray-700 text-base leading-relaxed">
            {paragraphs}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;


const SkillTag = (props: { skill: string, years: string }) => (
  // ここでスキルタグの見た目を定義
  <span className="bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold cursor-pointer transform transition duration-300 hover:scale-110">
    {props.skill} {props.years}
  </span>
);