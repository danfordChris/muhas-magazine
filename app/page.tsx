import BackCover from "@/components/BackCover";
import Campuses from "@/components/Campuses";
import Contents from "@/components/Contents";
import Cover from "@/components/Cover";
import Culture from "@/components/Culture";
import Field from "@/components/Field";
import Identity from "@/components/Identity";
import Leaders from "@/components/Leaders";
import Letter from "@/components/Letter";
import ScrollEffects from "@/components/ScrollEffects";
import Spine from "@/components/Spine";
import Story from "@/components/Story";
import Units from "@/components/Units";

export default function Home() {
  return (
    <>
      <a
        href="#cover"
        data-print-hide
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:bg-navy focus:px-4 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <Spine />

      <main id="cover">
        <Cover />
        <Contents />
        <Letter />
        <Identity />
        <Story />
        <Leaders />
        <Culture />
        <Field />
        <Campuses />
        <Units />
        <BackCover />
      </main>

      <ScrollEffects />
    </>
  );
}
