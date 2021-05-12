import dailyCase from "../../utils/fetcher";

export default async function daily(req, res) {
  let remote = await dailyCase();
  let response = remote.harian.map((item) => {
    return {
      key: item.key,
      positive: item.jumlah_positif.value,
      active: item.jumlah_dirawat.value,
      recover: item.jumlah_sembuh.value,
      death: item.jumlah_meninggal.value,
      positive_cumulative: item.jumlah_positif_kum.value,
      active_cumulative: item.jumlah_dirawat_kum.value,
      recover_cumulative: item.jumlah_sembuh_kum.value,
      death_cumulative: item.jumlah_meninggal_kum.value,
      last_update: item.key,
      date_time: item.key_as_string,
    };
  });
  res.json(response);
}
