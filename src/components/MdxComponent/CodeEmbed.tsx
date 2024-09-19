type CodeEmbedProps = {
  id: string;
  title: string;
  type: string;
};
const CodeEmbed: React.FC<CodeEmbedProps> = function CodeEmbed({
  id,
  title,
  type,
}) {
  return (
    <div>
      {type === "0" ? (
        <iframe
          height="440"
          width="100%"
          title={title}
          src={`https://codepen.io/YZRay/embed/${id}`}
          frameBorder="no"
          loading="lazy"
          allowTransparency={true}
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a
            rel="noreferrer noopener"
            href="https://codepen.io/YZRay/pen/BaMeQZO"
          >
            {title}
          </a>{" "}
          by YZRay (
          <a rel="noreferrer noopener" href="https://codepen.io/YZRay">
            @YZRay
          </a>
          ) on{" "}
          <a rel="noreferrer noopener" href="https://codepen.io">
            CodePen
          </a>
          .
        </iframe>
      ) : (
        <iframe
          src={`https://codesandbox.io/embed/${id}`}
          style={{
            width: "100%",
            height: "500px",
            border: "0",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          title={`${title}`}
          allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
          sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      )}
    </div>
  );
};

export default CodeEmbed;
