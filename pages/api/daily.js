import updateData from "../../utils/fetcher";

module.exports = async (req, res) => {
  let remote = await updateData(false);
  let response = remote.harian.map((item) => {
    return {
      positive: item.jumlah_positif.value,
      active: item.jumlah_dirawat.value,
      cured: item.jumlah_sembuh.value,
      death: item.jumlah_meninggal.value,
      positive_cumulative: item.jumlah_positif_kum.value,
      active_cumulative: item.jumlah_dirawat_kum.value,
      cured_cumulative: item.jumlah_sembuh_kum.value,
      death_cumulative: item.jumlah_meninggal_kum.value,
      last_update: item.key,
      datetime: item.key_as_string,
    };
  });
  res.json(response);
};
