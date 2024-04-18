export default function CodeEmbed({
  id,
  title,
  type,
}: {
  id: string;
  title: string;
  type: string;
}) {
  return (
    <div>
      {type === "0" ? (
        <iframe
          height="440"
          width="100%"
          title={title}
          src={`https://codepen.io/YZRay/embed/preview/${id}`}
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        >
          See the Pen <a href="https://codepen.io/YZRay/pen/BaMeQZO">{title}</a>{" "}
          by YZRay (<a href="https://codepen.io/YZRay">@YZRay</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
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
}
