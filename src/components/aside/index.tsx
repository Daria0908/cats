import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";

const Aside = inject("factStore")(
  observer(({ factStore }: any) => {
    useEffect(() => {
      getData();
    }, [factStore]);

    const getData = () => {
      factStore.changeFact();
    };

    return (
      <>
        <h2>Facts about cats</h2>
        <div>{factStore.fact}</div>
        <button onClick={getData}>Another one</button>
      </>
    );
  })
);

export default Aside;
