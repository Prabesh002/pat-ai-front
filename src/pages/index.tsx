import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Create Legal Documents&nbsp;</span>
          <span className={title({ color: "violet" })}>EASILY&nbsp;</span>
          <br />
          <span className={title()}>
            regardless of your legal knowledge or experience
          </span>
          <div className={subtitle({ class: "mt-4" })}>
             For individuals who cannot afford a lawyer and want a starting point.
          </div>
        </div>

      </section>
    </DefaultLayout>
  );
}
