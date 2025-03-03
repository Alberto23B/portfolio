export default function Label({ category }) {
  switch (category) {
    case 'fullstack': {
      return (
        <>
          <div className='py-2 my-2'>
            <p className='bg-green-400'>{category}</p>
          </div>
        </>
      );
    }
    case 'frontend': {
      return (
        <>
          <div className='py-2 my-2'>
            <p className='bg-cyan-400'>{category}</p>
          </div>
        </>
      );
    }
    default: {
      return (
        <>
          <div className='py-2 my-2'>
            <p className='bg-orange-400'>{category}</p>
          </div>
        </>
      );
    }
  }
}
