import { GiMedicalDrip, GiBrain } from "react-icons/gi";
import {
  FaHeartbeat,
  FaBone,
  FaEye,
  FaUser,
  FaBaby,
  FaLungs,
} from "react-icons/fa";
import { MdWc } from "react-icons/md";
import { IoMale } from "react-icons/io5";
import type { ReactNode } from "react";

export interface Speciality {
  name: string;
  icon: ReactNode;
}

export const specialities: Speciality[] = [
  { name: "قلب و عروق", icon: <FaHeartbeat color="red" size={40} /> },
  { name: "مغز و اعصاب", icon: <GiBrain color="purple" size={40} /> },
  { name: "ارتوپدی", icon: <FaBone color="orange" size={40} /> },
  { name: "پوست و مو", icon: <GiMedicalDrip color="pink" size={40} /> },
  { name: "چشم‌پزشکی", icon: <FaEye color="blue" size={40} /> },
  { name: "گوش، حلق و بینی", icon: <GiMedicalDrip color="teal" size={40} /> },
  { name: "جراحی عمومی", icon: <FaHeartbeat color="red" size={40} /> },
  { name: "جراحی مغز و اعصاب", icon: <GiBrain color="indigo" size={40} /> },
  { name: "جراحی پلاستیک", icon: <FaBone color="rose" size={40} /> },
  { name: "داخلی", icon: <GiMedicalDrip color="green" size={40} /> },
  { name: "اطفال", icon: <FaBaby color="yellow" size={40} /> },
  { name: "زنان و زایمان", icon: <MdWc color="magenta" size={40} /> },
  { name: "اورولوژی", icon: <IoMale color="cyan" size={40} /> },
  { name: "گوارش و کبد", icon: <FaLungs color="amber" size={40} /> },
  { name: "غدد و متابولیسم", icon: <GiMedicalDrip color="lime" size={40} /> },
  { name: "طب سالمندان", icon: <FaUser color="gray" size={40} /> },
  { name: "قلب و عروق", icon: <FaHeartbeat color="red" size={40} /> },
  { name: "مغز و اعصاب", icon: <GiBrain color="purple" size={40} /> },
  { name: "ارتوپدی", icon: <FaBone color="orange" size={40} /> },
  { name: "پوست و مو", icon: <GiMedicalDrip color="pink" size={40} /> },
  { name: "چشم‌پزشکی", icon: <FaEye color="blue" size={40} /> },
  { name: "گوش، حلق و بینی", icon: <GiMedicalDrip color="teal" size={40} /> },
  { name: "جراحی عمومی", icon: <FaHeartbeat color="red" size={40} /> },
  { name: "جراحی مغز و اعصاب", icon: <GiBrain color="indigo" size={40} /> },
  { name: "جراحی پلاستیک", icon: <FaBone color="rose" size={40} /> },
  { name: "داخلی", icon: <GiMedicalDrip color="green" size={40} /> },
  { name: "اطفال", icon: <FaBaby color="yellow" size={40} /> },
  { name: "زنان و زایمان", icon: <MdWc color="magenta" size={40} /> },
  { name: "اورولوژی", icon: <IoMale color="cyan" size={40} /> },
  { name: "گوارش و کبد", icon: <FaLungs color="amber" size={40} /> },
  { name: "غدد و متابولیسم", icon: <GiMedicalDrip color="lime" size={40} /> },
  { name: "طب سالمندان", icon: <FaUser color="gray" size={40} /> },
];
