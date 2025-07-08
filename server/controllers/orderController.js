
// Place Order COD : api/order/cod
export const placeOrderCOD = async(req, res) =>{

try {
  const {userId, items, address} = req.body
 if(!address || items.length===0)
  return res.json({success:false, message:"Invalid data"})

} catch (error) {
  console.log(error.message);
  res.json({ success: false, message: error.message });
}
}