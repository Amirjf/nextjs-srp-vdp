import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';

import { useEffect, useRef } from 'react';

function AirDatepickerReact(props: any) {
  let $input: any = useRef();
  let dp: any = useRef();

  // Start init
  useEffect(() => {
    // Save instance for the further update
    let maxdate = new Date(); //get current date
    maxdate.setDate(maxdate.getDate() + 7);

    dp.current = new AirDatepicker($input.current, {
      locale: localeEn,
      disableNavWhenOutOfRange: true,
      showOtherMonths: false,
      selectOtherMonths: false,
      showOtherYears: false,
      toggleSelected: true,
      autoClose: true,
      minView: 'days',
      minDate: new Date(),
      maxDate: maxdate,
      ...props,
    });
  }, []);

  useEffect(() => {
    // Update if props are changed
    dp.current.update({ ...props });
  }, [props]);

  return (
    <input
      ref={$input}
      readOnly
      style={{
        background: '#fff',
        border: '1px solid rgb(230, 230, 230)',
        height: 38,
        padding: 8,
        borderRadius: 5,
        fontSize: 15,
      }}
      placeholder={new Date().toLocaleDateString()}
      {...props}
    />
  );
}

export default AirDatepickerReact;
