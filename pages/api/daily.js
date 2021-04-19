import updateData  from "../../utils/fetcher";

module.exports = async (req, res) => {
  let data = await updateData(false);
  let datamodified = data.harian.map((data) => {
    return {
      positive: data.jumlah_positif.value,
      active: data.jumlah_dirawat.value,
      cured: data.jumlah_sembuh.value,
      death: data.jumlah_meninggal.value,
      positive_cumulative: data.jumlah_positif_kum.value,
      active_cumulative: data.jumlah_dirawat_kum.value,
      cured_cumulative: data.jumlah_sembuh_kum.value,
      death_cumulative: data.jumlah_meninggal_kum.value,
      last_update: data.key,
      datetime: data.key_as_string,
    };
  });
  res.json(datamodified);
};
