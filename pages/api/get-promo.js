export default async (req, res) => {
  return res.end(
    JSON.stringify({ showCoupon: true, message: 'Mensagem Cupom!' })
  );
};
