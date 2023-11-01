import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <Loader2 className="h-8 w-8 animate-spin" />
      Starting up...
    </div>
  );
};

export default Loading;
