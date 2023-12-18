import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const PersonalPR = () => {
  const prText = `フロントエンド開発の分野で豊かな経験と幅広い技術スキルを持つエンジニアとして、私はユーザーを中心に考えたインタラクティブなウェブアプリケーションを創造することに情熱を傾けています。HTML、CSS、JavaScriptを用いた豊かなUIの開発には3年以上の経験があり、ReactやNext.jsを活用して現代的で反応性の高いウェブインターフェースの設計と実装を行ってきました。

さらに、SassやTypeScriptのような最先端のフロントエンド技術を駆使し、効率的で読みやすいコードの作成に注力しています。これらの技術は、プロジェクトのニーズを的確に理解し、ユーザーに最適な体験を提供する上で欠かせません。

バックエンドとの連携に関しても、PythonやNode.jsの知識を活かし、フルスタック開発のプロジェクトに積極的に取り組んできました。AWSの基本とDockerを使用したアプリケーションのデプロイにも関わり、開発から運用に至るまで幅広い工程に精通しています。

チームプロジェクトでは、GitHubを用いた効果的なバージョン管理とチームメンバーとの緊密なコラボレーションを通じて、数々のプロジェクトを成功に導いてきました。常に新技術の習得に意欲的で、最新のトレンドを取り入れることで、プロジェクトに革新的なアプローチを提供しています。`;

  const paragraphs = prText.split('\n').filter(p => p).map((p, index) => <p key={index} className="mb-4">{p}</p>);

  return (
    <div className='bg-white shadow-xl rounded-lg p-8 mt-8'>
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaUserTie className="text-red-600" /> 私について
        </h3>
        <div className="text-gray-800 text-lg leading-loose">
          {paragraphs}
        </div>
      </div>
    </div>
  );
};

export default PersonalPR;
