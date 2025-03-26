import React from 'react'

const Interview = () => {
  return (
    <div className="section">
    <div className="conversation">
      <div className="heading">
        <h1>
          ヨコヤマの商品は、
          <br />
          成分表を見てほしい
        </h1>
      </div>
      <div className="talksection">
        <p className="yokoyamasan">
          横山　これ僕がプレゼンの時にいつも言うんですけど、成分表を見てほしいんです。
          豚骨味の食べ物で豚骨がちゃんと一番上にきてるのって実は意外と少ないんすね。
        </p>
        <p className="kikite">
          確かに。豚骨じゃなくてラードが使われているものとかも結構ありますよね。
        </p>
        <p className="yokoyamasan">
          横山　そうなんです。味わいをよくする為だったり、コストの関係だったり。
          理由は様々だと思うんすけど、僕はちゃんと豚骨味なら豚骨を使いたいって考えなんです。本来はそれが正しいはずですしね。
        </p>
        <p className="kikite">
          確かに。。。当たり前ってやっぱり意外と難しい。成分表って、そもそも記載される順番に決まりとかあるんですか？
        </p>
        <p className="yokoyamasan">
          横山　あ。ありますよ。成分表は内容量が多いものが前に表記するようになっています。前に書かれていればいるほど基本的には味わいを強く感じますね。
        </p>
        <p className="kikite">
          そうなんですね、TONGARIは豚骨スープが一番最初に来てますね。
        </p>
        <p className="yokoyamasan">
          横山　そうなんすよ。本物の豚骨をせっかく使っているなら一番多く入れればちゃんと豚骨を感じてもらえる。
          TONGARIにとって知ってほしい大事なことから順に書いてあるんすよ。そう言う状態を基本にしながら作ることは意識してますね。
        </p>
        <p className="kikite">
          アツいですね。。！でも成分表とかってあんまり目に付く機会って少ないと思うんですけど、なんでそこまでこだわり切れるんですか？
        </p>
        <p className="yokoyamasan">
          横山　単純に豚骨味なら豚骨以外を使いたくないって言うのもありますけど、ぶっちゃけドレッシングって大手でいいやってなっちゃうじゃないですか。もし自分もこうやって作ってなかったらそうだったかもしれないし。そんな状況で大手に勝てるとしたらこうするしかない（笑）
          豚骨って管理も大変だし材料的にも人材的にもコストが凄くかかる。みんなやらないからこそ、そこには価値があるって思ってるんです。
        </p>
        <p className="kikite">
          めっちゃ真っ直ぐ。（笑）でも、そんな横山さんの人柄と思いがあるから生み出せるドレッシングに思えます！なにより美味しい！
        </p>
        <p className="yokoyamasan">
          横山　おお。ありがとうございます！結構香りとかもパンチ効いてて味は本当自信ありますよ！
        </p>
      </div>
    </div>

    <div className="display">
      <p className="paragraph">
        名称：乳化液状ドレッシング
        <br />
        原材料名：
        <a className="kodawariyanen" href="#">
          豚骨スープ
        </a>
        (ガラ
        <br />
        スープ、本醸造醤油、食用植
        <br />
        物油脂、砂糖、その他)(国内
        <br />
        製造)、<a className="kodawariyanen" href="#">本醸造醤油</a>、<a className="kodawariyanen" href="#">ニンニク</a>
        <br />
        /調味料(アミノ酸等)、カラ
        <br />
        メル色素、酸化防止剤(V.E),
        <br />
        酒精、(一部に小麦・大豆・豚
        <br />
        肉・鶏肉を含む)　内容量：
        <br />
        160ml 賞味期限：枠外下部に
        <br />
        記載　保存方法：直射日光、
        <br />
        高温多湿を避けて保存。
        <br />
        販売者：(株)ヨコヤマ
        <br />
        <span>東京都新宿区西早稲田3-1-6-402</span>
        <br />
        TEL：03-4446-9067
      </p>
    </div>
  </div>
  )
}

export default Interview