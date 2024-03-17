export default function (req, res) {
  const time = new Date();
  res.status(200).end(time.toString());
}
