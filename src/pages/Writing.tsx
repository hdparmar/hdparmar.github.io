import WritingList from "@/components/WritingList";
import { writing } from "@/content/writing";

const Writing = () => (
  <main className="page-column">
    <header className="pt-10 md:pt-14">
      <h1 className="text-[clamp(1.75rem,4.4vw,2.35rem)] font-semibold leading-tight tracking-[-0.01em]">Writing</h1>
      <p className="mt-4 text-[17px] leading-[1.65] text-muted-foreground">Notes, poems and excerpts, each with a photograph.</p>
    </header>
    <div className="mt-12 border-t border-foreground">
      {writing.length ? (
        <WritingList pieces={writing} />
      ) : (
        <p className="py-6 text-muted-foreground">Nothing here yet.</p>
      )}
    </div>
  </main>
);

export default Writing;
