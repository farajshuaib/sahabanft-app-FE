/// <reference types="vite/client" />
/// <reference types="@types/grecaptcha" />


type TwMainColor =
  | "pink"
  | "green"
  | "yellow"
  | "red"
  | "indigo"
  | "blue"
  | "purple"
  | "gray";

interface CustomLink {
  label: string;
  href: string;
  targetBlank?: boolean;
}

interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/nft-details/:id"?: {};
  "/collections"?: {};
  "/collections/:category_id"?: {};
  "/create-collection"?: {};
  "/collection/:id"?: {};
  "/search"?: {};
  "/author/:id"?: {};
  "/create-nft"?: {};
  "/connect-wallet"?: {};
  "/account"?: {};
  "/about"?: {};
  "/contact"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/kyc-form"?: {};
  "/collection/:id/edit"?: {};
  "*"?: {};
}

interface Meta {
  count: number;
  current: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
  current_page?: number;
}

interface Contract_NFT {
  tokenId: number;
  mintedBy: string; // address
  currentOwner: string; // address
  previousOwner: string; // address
  price: number;
  numberOfTransfers: number;
}

interface Contract_methods {
  address: string;
  deployed: () => void;
  collectionName: string;
  collectionNameSymbol: string;
  createAndListToken: (
    tokenURI: string,
    price: number,
    collection_id: number
  ) => number; // tokenID
  buyToken: (tokenId: number) => void;
  changeTokenPrice: (tokenId: number, newPrice: number) => void; // you must be the owner of the token
  getServiceFeesPrice: () => number;
  setServiceFeesPrice: (newPrice: number) => number;
  getTokenOwner: (tokenId: number) => string;
  getTokenURI: (tokenId: number) => string;
  getTotalNumberOfTokensOwnedByAnAddress: (owner: string) => number;
  getTokenExists: (tokenId: number) => boolean;
  burn: (tokenId: number) => void;
}

interface Category {
  id: number;
  name: string;
  icon: string;
  collections_count: number;
  nfts_count: number;
}

interface Transactions {
  id: number;
  from: UserData;
  to: UserData;
  price: number | string;
  created_at: Date;
  type: "mint" | "set_for_sale" | "sale" | "update_price" | "cancel_sale";
}

interface SocialLinks {
  id?: number;
  twitter_url?: string;
  facebook_url?: string;
  instagram_url?: string;
  website_url?: string;
  telegram_url?: string;
}

interface Nft {
  id: number;
  title: string;
  creator_address: string;
  description: string;
  file_path: string;
  file_type: string;
  collection: Collection;
  creator: UserData;
  owner: UserData;
  price: number;
  like_count: number;
  is_for_sale: boolean;
  is_liked?: boolean;
  status: "published" | "hidden";
  sale_end_at: Date;
}

interface Collection {
  id: number;
  name: string;
  description: string;
  logo_image: string;
  banner_image: string;
  is_sensitive_content: boolean;
  category: Category;
  nfts: Nft[];
  created_by: UserData;
  nfts_count: number;
  volume: number;
  min_price: number;
  max_price: number;
  collaborators: Collaboration[];
  social_links: SocialLinks;
}

interface Collaboration {
  id: number;
  user: UserData;
}

interface KycData {
  id: number;
  gender?: "male" | "female" | "";
  country?: string;
  city?: string;
  address?: string;
  phone_number?: string;
  author_type?: "creator" | "collector" | "";
  author_art_type?: string;
  passport_id?: string;
  status?: "pending" | "approved" | "rejected" | "on_review";
}

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  wallet_address: string;
  username: string;
  email: string;
  bio: string;
  profile_photo: string;
  banner_photo: string;
  status: "active" | "suspended";
  is_followed?: boolean;
  is_subscribed: boolean;
  social_links: SocialLinks;
  kyc_form: KycData;
  created_nfts_count: number;
  owned_nfts_count: number;
  email_verified_at: boolean;
}

interface SupportedLocales {
  key: "fr" | "ar" | "en";
  value: string;
}

interface NcDropDownItem {
  id: string;
  name: string;
  icon?: string;
  href?: string;
}

interface Notification {
  id: number;
  read_at: Date;
}

interface NotificationPayload {
  meta: Meta | null;
  data: Notification[];
  links: any;
}

type ExternalProvider = {
  isMetaMask?: boolean;
  isStatus?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (
    request: { method: string; params?: Array<any> },
    callback: (error: any, response: any) => void
  ) => void;
  send?: (
    request: { method: string; params?: Array<any> },
    callback: (error: any, response: any) => void
  ) => void;
  request?: (request: { method: string; params?: Array<any> }) => Promise<any>;
};
