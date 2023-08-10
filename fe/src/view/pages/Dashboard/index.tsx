export function Dashboard() {
  return (
    <div className='w-full h-full flex items-center justify-center p-4'>
      <main className='flex w-full h-full bg-blue-300'>
        <div className='w-1/4 h-full'>
          <div className='bg-green-500 h-1/2'>
            Próxima consulta
          </div>
          <div className='bg-pink-500 h-1/2'>
            Aniversario
          </div>
        </div>
        <div className='bg-blue-500 w-3/4 h-full'>
          Dashboard
        </div>
      </main>
      <div className='bg-red-500 fixed top-8 right-8'>
        Side Bar
      </div>
    </div>
  );
}
