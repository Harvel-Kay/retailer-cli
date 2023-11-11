import { Form, useActionData, useNavigation } from "react-router-dom";
import DateInput from "./dateInput";
import "./styles.css";
import FormBtn from "../../formBtn/formbtn";
import ErrorCont from "../../error/errorCont";
import strFormat from "../../../utils/string-number";

export default function Sales() {
  const res = useActionData();
  const error = res?.error;
  const sales = res?.data;
  const { state } = useNavigation();

  const orgnaise = () => {
    let clone = [];

    const sumed = [];
    sales.forEach((sale) => {
      const exists = clone.find(
        (s) =>
          new Date(s.dateSold).toDateString() ===
          new Date(sale.dateSold).toDateString()
      );

      if (exists) {
        sale.products.forEach((prod) => {
          const isThere = exists.products.find((p) => p._id === prod._id);
          if (!isThere) exists.products.push(prod);
          else {
            isThere.qty += prod.qty;
            exists.products.map((product) =>
              product._id === isThere._id ? isThere : product
            );
          }
        });
      } else {
        const newSale = {
          dateSold: sale.dateSold,
          products: sale.products,
          _id: sale._id,
        };
        clone.push(newSale);
      }
    });

    clone.forEach((sale) => {
      sale.total = 0;
      sale.products.forEach((prod) => {
        sale.total += prod.price * prod.qty;
      });
      sumed.push(sale.total);
    });

    return clone;
  };

  return (
    <div className="sales home-page">
      <Form className="time-deltas grid" method="post">
        <div className="from grid">
          <h2 className="time-title">From</h2>
          <DateInput name="fromdate" error={error} />
        </div>
        <p className="sales-p">
          Select a time interval to generate a sales summary
        </p>
        <div className="to grid">
          <h2 className="time-title">To</h2>
          <DateInput name="todate" error={error} />
        </div>
        {error?.interval && <ErrorCont message={error.interval} />}
        <FormBtn
          brand="Submit"
          btn_event={() => {}}
          navState={state}
          classes="get-sales"
          spinCls={"sale-spin"}
        />
      </Form>
      <div>
        <h2>Show items</h2>
      </div>
      {sales && (
        <div className="summary-cont">
          <section className="title-section grid">
            <h2>Sales</h2>
            <h2>Products</h2>
            <h2>Total</h2>
          </section>
          <section className="sales-cont">
            {orgnaise().map((sale) => (
              <div className="sale-cont grid" key={sale._id}>
                <h2 className="sales-p">
                  {new Date(sale.dateSold).toDateString()}
                </h2>
                <ul>
                  {sale.products.map((prod) => (
                    <li key={prod._id} className="item grid">
                      <p className="sales-p">{prod.name}</p>
                      <em className="sales-p"> {prod.qty}</em>
                    </li>
                  ))}
                </ul>
                <h2 className="sales-total">{strFormat(sale.total)}</h2>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
