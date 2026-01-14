const posts = [
  {
    title: "Building TonePad: A Journey into Music Education Hardware",
    summary: "How we're reimagining music learning through tactile, playful devices.",
  },
  {
    title: "Edge Computing for Real-time Audio Processing",
    summary: "Exploring low-latency audio synthesis on embedded systems.",
  },
  {
    title: "Fine-tuning Diffusion Models for Niche Domains",
    summary: "Lessons learned from training Riffusion on Irish Traditional Music.",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-16 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-lg font-semibold text-foreground mb-8">
          Writing
        </h2>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="group cursor-pointer">
              <h3 className="text-base font-medium text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {post.summary}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-foreground mt-16 mb-8">
          Current Read
        </h2>

        <div>
          <h3 className="text-base font-medium text-foreground">
            The Pragmatic Programmer
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            by David Thomas & Andrew Hunt
          </p>
        </div>
      </div>
    </section>
  );
};

export default Writing;