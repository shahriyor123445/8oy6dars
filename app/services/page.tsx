import React from "react";
import Image from "next/image";
import rasm1 from "@/public/bench-accounting-C3V88BOoRoM-unsplash 1.svg";

export default function services() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-black w-[768px] text-[58px] mt-[60px] mb-[60px] ml-[-250px]">
        Agile focused business services and more.
      </h2>
      <p className="w-[766px] text-[21px] mb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        semper varius eleifend. Sed ornare lectus ut dui auctor, vitae pulvinar
        risus euismod. Cras tellus nisl, imperdiet nec sollicitudin vitae,
        pellentesque vel mauris. Integer quis elementum sapien. Ut accumsan
        consectetur erat et rutrum. Mauris maximus tortor nec consectetur
        ultrices. Sed volutpat sem at leo sollicitudin dapibus. Donec tincidunt
        faucibus rutrum. Sed lacinia metus nec pellentesque ullamcorper. Nulla
        ultricies dolor vitae sapien ornare, in euismod tellus luctus. Integer
        id imperdiet eros. Praesent mollis cursus nisl non volutpat.
      </p>
      <Image src={rasm1} alt="rasm" className="h-[500px] w-full" />
      <p className="w-[760px] mt-[30px] mb-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor,
        elit imperdiet feugiat sagittis, ante lorem finibus leo, in lobortis
        nulla felis ut tellus. Vivamus non congue magna. In quam erat, euismod
        ac est sit amet, elementum fringilla arcu. Nam rhoncus sed ipsum et
        facilisis. Vivamus bibendum vehicula magna, id finibus justo laoreet et.
        Nullam bibendum finibus cursus. Praesent quis venenatis augue, quis
        faucibus quam. Suspendisse potenti. Donec vehicula cursus leo, sit amet
        cursus lorem lacinia ac. Suspendisse cursus dui eu risus vestibulum
        dapibus. Cras scelerisque eget nulla eu aliquam. Maecenas tempor ipsum
        ac est dapibus, a faucibus lacus consectetur. Maecenas et tellus sed
        turpis cursus aliquam. Aliquam at fringilla libero. Pellentesque ut
        turpis commodo, mattis augue sit amet, vehicula nisi. Morbi faucibus est
        sagittis tincidunt auctor. Cras sed lobortis orci. In congue et mauris
        in accumsan. Phasellus vitae tempus tellus, quis tempor mi. Phasellus
        ullamcorper iaculis risus quis tempor. Praesent iaculis justo ut risus
        elementum, sed viverra mauris convallis.
      </p>
    </div>
  );
}
