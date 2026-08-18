export const fields = [
  { id: 'invoice', label: 'Invoice ID', type: 'text' },
  { id: 'customer', label: 'Customer', type: 'text' },
  { id: 'region', label: 'Region', type: 'text' },
  { id: 'category', label: 'Category', type: 'text' },
  { id: 'date', label: 'Order Date', type: 'date' },
  { id: 'quantity', label: 'Quantity', type: 'number' },
  { id: 'amount', label: 'Net Amount', type: 'currency' },
  { id: 'status', label: 'Status', type: 'text' },
]

export const rows = [
  { invoice:'INV-1048', customer:'Northwind Traders', region:'North', category:'Enterprise', date:'2026-08-02', quantity:12, amount:18450, status:'Paid' },
  { invoice:'INV-1049', customer:'Acme Systems', region:'North', category:'Growth', date:'2026-08-04', quantity:7, amount:9870, status:'Paid' },
  { invoice:'INV-1054', customer:'Vertex Digital', region:'North', category:'Enterprise', date:'2026-08-11', quantity:18, amount:24700, status:'Pending' },
  { invoice:'INV-1050', customer:'Globex Corporation', region:'South', category:'Enterprise', date:'2026-08-05', quantity:24, amount:32190, status:'Paid' },
  { invoice:'INV-1051', customer:'Coastal Labs', region:'South', category:'Starter', date:'2026-08-07', quantity:4, amount:4350, status:'Overdue' },
  { invoice:'INV-1056', customer:'Blue Harbor Co.', region:'South', category:'Growth', date:'2026-08-14', quantity:9, amount:12600, status:'Paid' },
  { invoice:'INV-1052', customer:'Pioneer Works', region:'West', category:'Growth', date:'2026-08-08', quantity:10, amount:14200, status:'Pending' },
  { invoice:'INV-1053', customer:'Summit Retail', region:'West', category:'Starter', date:'2026-08-10', quantity:5, amount:5950, status:'Paid' },
  { invoice:'INV-1055', customer:'Orbit Industries', region:'West', category:'Enterprise', date:'2026-08-12', quantity:15, amount:21640, status:'Paid' },
]

export const initialColumns = [
  { id:'invoice', label:'Invoice ID', width:110, align:'left', format:'text', color:'#24304a', bold:false },
  { id:'customer', label:'Customer', width:190, align:'left', format:'text', color:'#24304a', bold:false },
  { id:'date', label:'Order Date', width:120, align:'left', format:'date', color:'#24304a', bold:false },
  { id:'amount', label:'Net Amount', width:120, align:'right', format:'currency', color:'#24304a', bold:true },
  { id:'status', label:'Status', width:95, align:'left', format:'text', color:'#24304a', bold:false },
]
