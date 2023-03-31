import Layout from 'components/Layout';
import Image from 'next/image';
import Button from 'components/Button';
import airtableModule from 'utils/airtable';
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';

export async function getServerSideProps() {
  const donor = 'pret';
  const menu = await airtableModule.getRecords(donor);
  if (!menu) {
    return {
      notFound: true,
    };
  }
  if (menu) {
    return {
      props: {
        menu,
      },
    };
  }
}

export default function MoreInfo({ menu }) {
  const [foodname, setFoodname] = useState([]);
  const [fooddescription, setFoodDescription] = useState([]);
  const [foodImage, setFoodImage] = useState([]);
  const [foodHours, setFoodHours] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const newFood = menu.map((item) => ({
      id: item.ID,
      fields: {
        name: item.name,
        description: item.description,
        allergens: item.allergens,
        image: item.image,
        hours: item.hours,
      },
    }));
    console.log(newFood);
    const foodName = newFood[0].fields.name;
    setFoodname(foodName);
    const foodDescription = newFood[0].fields.description;
    setFoodDescription(foodDescription);
    const foodimage = newFood[0].fields.image[0].url;
    setFoodImage(foodimage);
    const foodhours = newFood[0].fields.hours;
    setFoodHours(foodhours);
  }, [menu]);
  //   console.log(foodImage.fields.image[0].url);

  return (
    <Layout>
      <div className='bg-white flex flex-col items-center justify-center gap-2 w-full'>
        <img
          src={foodImage}
          className=''
          alt='chicken sandwich'
          width={400}
          height={100}
        />
        <h1 className='font-cursive text-accentcolor1 text-5xl'>{foodname}</h1>
        <p className='flex justify-center text-center text-accentcolor1 text-sm'>
          {fooddescription}
        </p>
        <div className='text-accentcolor1 text-center text-sm mb-40'>
          <p>Pret a Manger</p> {/* should show table name */}
          <p>271 Holloway Road, London N7, UK</p>
          {/* show address from collaborators */}
          <p>Collect: {foodHours}</p>
          {/* show opening hours from collaborators */}
          <button onClick={setModalOpen}>
            Click here for ingredients and allergens
          </button>
          {/* open a modal */}
          <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
            <div>Ingredients and allergens go here</div>
            <div className='flex justify-end mt-4'>
              <button
                className='flex items-center justify-center max-w-xs w-40 bg-dim-black font-cursive text-accentcolor3 tracking-widest text-3xl bg-accentcolor1 py-2 px-2 rounded-lg hover:bg-green hover:text-accentcolor1'
                onClick={() => setModalOpen(false)}
              >
                Close Modal
              </button>
            </div>
          </Modal>
          <br></br>
          <div className='flex justify-center '>
            <Button buttonName={'Reserve'} buttonLink='/reservation-successful'>
              Reserve
            </Button>
            {/* button should also run a function to add that food item to an array to be rendered in profiles tab */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
