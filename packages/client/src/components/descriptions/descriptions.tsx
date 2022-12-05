import React, { useEffect }  from 'react'
import { useDispatch } from 'react-redux';

interface IDesc {
  word: string
}

export const Descriptions: React.FC<any> = (word: IDesc): JSX.Element => {
  const dispatch = useDispatch();
  const SITE_ADDRESS = 'http://localhost'
  const url = SITE_ADDRESS + ':3001' + '/api/v1/desc/' + word.word;

  /* вынести в события и хранилища */
  const UPD_DESC = "updDescription";

  function description(desc: Promise<any>) {
    console.log(desc)
    return { 
        type: UPD_DESC,
        desc
    };
  }

  useEffect(() => {
    fetch(url, { method:"GET", headers: { "Content-Type":"text/html" } })
    .then(function (response) {
       dispatch(description(response.json()));
      });
  }, [dispatch])

  return (
    <>
      <div className="descriptions">
        <div className="description">
          DESCRIPTIONS 
        </div>
      </div>
    </>
  )
}
