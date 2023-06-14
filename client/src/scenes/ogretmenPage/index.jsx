import React from "react";
import OgrenciForm from "../../components/OgrenciForm";
import OgrenciListesi from "../../components/OgrenciListesi";
import OgretmenPost from "../../components/OgretmenPost";

function OgretmenPage() {
  return (
    <div>
      <OgrenciForm />
      <hr />
      <OgrenciListesi />
      <hr />
      <OgretmenPost />
    </div>
  );
}

export default OgretmenPage;
