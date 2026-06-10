const posts = [
  {
    title: "Building TonePad: A Journey into Music Education Hardware",
    summary: "How we're reimagining music learning through tactile, playful devices.",
    type: "Draft",
  },
  {
    title: "Edge Computing for Real-time Audio Processing",
    summary: "Exploring low-latency audio synthesis on embedded systems.",
    type: "Note",
  },
  {
    title: "Fine-tuning Diffusion Models for Niche Domains",
    summary: "Lessons learned from training Riffusion on Irish Traditional Music.",
    type: "Essay",
  },
];

const Writing = () => {
  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="min-w-0 py-12 md:py-14"
    >
      <div className="border-t border-border pt-5">
        <h2 id="writing-heading" className="mb-6 text-xl font-semibold text-foreground md:text-2xl">
          Writing
        </h2>

        <div className="divide-y divide-border/80 border-b border-border/80">
          {posts.map((post, index) => (
            <article key={post.title} className="grid gap-3 py-4 md:grid-cols-[7rem_minmax(0,1fr)_3rem] md:gap-5">
              <p className="text-sm font-medium text-muted-foreground">{post.type}</p>
              <div className="min-w-0">
                <h3 className="text-base font-semibold leading-6 text-foreground">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm font-light leading-6 text-muted-foreground">
                  {post.summary}
                </p>
              </div>
              <span className="text-sm font-extralight text-muted-foreground md:text-right" aria-hidden="true">
                {index + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
