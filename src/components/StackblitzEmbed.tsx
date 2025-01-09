import sdk from "@stackblitz/sdk";
import { useEffect } from "react";

export const StackblitzEmbed = (props: { projectID: string }) => {
  useEffect(() => {
    sdk
      .embedProjectId("stackblitz-embed", props.projectID, {
        openFile: "package.json",
        clickToLoad: true,
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div style={{ paddingTop: "15px" }}>
      <div id="stackblitz-embed">Embed Stackblitz editor</div>
    </div>
  );
};
