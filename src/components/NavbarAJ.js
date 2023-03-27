function NavbarAJ() {
  return (
    <nav class=" border-gray-200 bg-green-700 p-3">
      <div class="flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <div class="flex items-center">
          
          <a href="">
            <img src="pks.png" class="h-12 mr-3 sm:h-9" alt="Petpittayakom Logo" />
          </a>
          <a href="#" class="text-sm font-bold text-white hover:underline px-2">หน้าหลัก</a>
          <a href="#" class="text-sm font-bold text-white hover:underline px-2">รายชื่อนักเรียน</a>
        </div>


        <div class="flex items-center">
          <a href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">Prof.Pao</a>
          <a href="#" class="text-sm font-medium text-white hover:underline">Login</a>
        </div>
      </div>
    </nav>
  );
}
export default NavbarAJ;