export default function Gift({title, id, url}) {
  return (
    <div>
      <h5>{title}</h5>
      <img src={url} alt="Gift de gatos" />
    </div>
  );
}
