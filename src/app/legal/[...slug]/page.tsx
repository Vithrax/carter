import type { PageProps } from "@/types";
import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx-components";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function getDocFromParams(params: { slug: string[] }) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) notFound();

  return doc;
}

const Page = ({ params }: PageProps) => {
  const doc = getDocFromParams(params);
  return (
    <div className="mt-4 space-y-4 px-3 pb-8">
      <Link href="/" className="flex items-center justify-start gap-1.5">
        <ArrowLeft className="h-4 w-4" />
        Home
      </Link>
      <div>
        <Mdx code={doc.body.code} />
      </div>
    </div>
  );
};

export default Page;
