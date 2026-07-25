const githubUrl =
  "https://github.com/Y664-series/resume-experience-deep-dive";

const entryPoints = [
  {
    label: "已有完整简历",
    copy: "上传中文或英文简历，先选择其中一段，再开始深挖。",
    mark: "整份",
  },
  {
    label: "只有一段描述",
    copy: "项目说明、零散笔记、旧版 bullet，都可以直接成为入口。",
    mark: "单段",
  },
  {
    label: "还没写过简历",
    copy: "从一个模糊项目回忆开始，逐步还原背景、角色与行动。",
    mark: "回忆",
  },
];

const outputs = [
  {
    title: "经历母档",
    tag: "长期留档",
    copy: "保留背景、角色、业务简介、行动、结果、证据、复盘、方法与未知项。",
  },
  {
    title: "面试记忆锚点",
    tag: "自然表达",
    copy: "只整理需要记住的 bullet points，不生成让人越背越僵的逐字稿。",
  },
  {
    title: "岗位定制经历",
    tag: "针对 JD",
    copy: "把岗位要求与母档证据逐项映射，事实不足时明确提示，不反向补造经历。",
  },
];

const rules = [
  "先确认事实，再生成文案",
  "一次只问一个关键问题",
  "不编造、不抢功、不强行量化",
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="主导航">
        <a className="wordmark" href="#top" aria-label="返回顶部">
          履历经历深挖
        </a>
        <div className="navlinks">
          <a href="#how">怎么工作</a>
          <a href="#outputs">产出</a>
          <a className="nav-cta" href={githubUrl}>
            GitHub 安装 ↗
          </a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            给说不清自己做过什么的人
          </div>
          <h1>
            把模糊经历，
            <br />
            <span>问成可信证据。</span>
          </h1>
          <p className="hero-lead">
            不是替你包装一个更厉害的故事，而是通过耐心追问，还原真正的背景、行动、结果与个人贡献。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={githubUrl}>
              在 Codex 中安装
              <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#how">
              看它怎么问清一段经历
            </a>
          </div>
          <p className="microcopy">
            完整简历 · 单段描述 · 零散回忆，都可以开始
          </p>
        </div>

        <div className="hero-board" aria-label="经历从模糊到清晰的示意">
          <div className="bear-card">
            <div className="bear-face" aria-hidden="true">
              <span className="ear left-ear" />
              <span className="ear right-ear" />
              <span className="eye left-eye">✦</span>
              <span className="eye right-eye">✦</span>
              <span className="mouth">⌣</span>
            </div>
            <div className="resume-sheet">
              <span />
              <span />
              <span />
            </div>
            <p>“您好，这是我的简历”</p>
          </div>
          <div className="loose-note note-one">参与了增长项目？</div>
          <div className="loose-note note-two">负责了很多事情？</div>
          <div className="loose-note note-three">效果不错？</div>
          <div className="question-line" aria-hidden="true" />
          <div className="ledger-card">
            <div className="ledger-title">
              <span>事实账本</span>
              <small>已核验</small>
            </div>
            <ul>
              <li>项目背景与目标</li>
              <li>我的角色与边界</li>
              <li>具体行动与判断</li>
              <li>结果、证据与口径</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="entry-section" aria-labelledby="entry-title">
        <div className="section-heading">
          <p>不用先准备好</p>
          <h2 id="entry-title">你有什么，就从什么开始。</h2>
        </div>
        <div className="entry-grid">
          {entryPoints.map((entry) => (
            <article className="entry-card" key={entry.label}>
              <span className="card-mark">{entry.mark}</span>
              <h3>{entry.label}</h3>
              <p>{entry.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="how" aria-labelledby="how-title">
        <div className="section-heading process-heading">
          <p>不是问卷，是一次有方向的访谈</p>
          <h2 id="how-title">下一问，永远追着最关键的事实缺口走。</h2>
        </div>

        <div className="transformation">
          <div className="before-card">
            <span className="stage-label">你最初说</span>
            <blockquote>“我负责产品优化，最后效果提升了不少。”</blockquote>
            <div className="red-note">哪里提升？谁负责？怎么证明？</div>
          </div>
          <div className="interview-path" aria-label="追问过程">
            <div>
              <span>01</span>
              <p>当时要解决什么问题？</p>
            </div>
            <div>
              <span>02</span>
              <p>你具体做了哪些判断和动作？</p>
            </div>
            <div>
              <span>03</span>
              <p>结果如何验证？你的贡献到哪里？</p>
            </div>
          </div>
          <div className="after-card">
            <span className="stage-label">确认后留下</span>
            <p>
              基于用户反馈与流失节点分析，明确首登流程中的信息负担，推动合并两步操作并补充错误提示；灰度期间完成关键路径验证，为后续全量方案提供依据。
            </p>
            <div className="blue-note">没有可靠数字，也不强造数字。</div>
          </div>
        </div>
      </section>

      <section className="output-section" id="outputs" aria-labelledby="output-title">
        <div className="section-heading">
          <p>一次深挖，留下三种材料</p>
          <h2 id="output-title">先有一份可信母档，再派生不同版本。</h2>
        </div>
        <div className="output-grid">
          {outputs.map((output) => (
            <article className="output-card" key={output.title}>
              <span>{output.tag}</span>
              <h3>{output.title}</h3>
              <p>{output.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="truth-section" aria-labelledby="truth-title">
        <div className="truth-copy">
          <p className="section-kicker">可信，比华丽重要</p>
          <h2 id="truth-title">它会帮你归纳，但不会替你经历。</h2>
          <p>
            Agent 可以从真实行动中总结步骤、检查清单、决策原则或 SOP，也可以在你授权后参考公开行业方法。但它会始终标明：哪些是事实、哪些是估算、哪些是事后归纳。
          </p>
        </div>
        <ol className="rule-list">
          {rules.map((rule, index) => (
            <li key={rule}>
              <span>0{index + 1}</span>
              {rule}
            </li>
          ))}
        </ol>
      </section>

      <section className="install-section">
        <div>
          <p>准备好拆第一段了吗？</p>
          <h2>不用先写好。先把你记得的告诉它。</h2>
        </div>
        <a className="primary-button dark-button" href={githubUrl}>
          查看安装与用法
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <span>Resume Experience Deep Dive</span>
        <span>事实先于表达 · 中文访谈 · 开源 Skill</span>
      </footer>
    </main>
  );
}
