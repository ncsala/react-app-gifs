export default function Gif({title, url}) {
  return (
    <div>
      <h5>{title}</h5>
      <img src={url} alt="Gif de gatos" />
    </div>
  );
}
