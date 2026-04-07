interface SocialMedia {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
}

interface BranchContacts {
  mail: string;
  phoneNumber: string;
  prMail: string;
  prPhoneNumber: string;
}

export const branchContacts: BranchContacts = {
  mail: "scu@ieee.org.eg",
  phoneNumber: "+20 120 654 7195",
  prMail: "ieee.scu.pr@gmail.com",
  prPhoneNumber: "+20 112 246 1100",
};

export const socialMediaLinks: SocialMedia = {
  facebook: "https://www.facebook.com/IEEESCU",
  instagram: "https://www.instagram.com/ieee_scu_sb",
  linkedin: "https://www.linkedin.com/company/ieee-suez-canal-university-student-branch",
  tiktok: "https://www.tiktok.com/@ieeescusb",
};
