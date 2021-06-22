import fetcher from "../../utils/fetcher";

export default async function daily(_, res) {
  const url = "https://data.covid19.go.id/public/api/update.json";
  let remote = await fetcher(url);
  if (remote.status != 200) {
    res.json({ message: "Something went wrong" });
  }
  let date_time = new Date(remote.data.penambahan.created);
  let total = remote.data.total;
  let response = {
    positive: total.jumlah_positif,
    active: total.jumlah_dirawat,
    cured: total.jumlah_sembuh,
    death: total.jumlah_meninggal,
    updated_at: date_time.toISOString(),
  };
  res.json(response);
}
