import type { NavLinkItem, Service, Event, SocialLink } from './types';
import { Instagram, Facebook, Youtube, Twitter, MicVocal, Disc, Clapperboard, Users, Music, Calendar, MapPin, Mail, Phone } from 'lucide-react';

export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Events', path: '/events' },
  { name: 'Location', path: '/location' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    icon: MicVocal,
    title: 'Profesyonel Ses Kayıt Stüdyoları',
    description: 'En son teknoloji ekipmanlarla donatılmış, profesyonel üretim standartlarını karşılayan ses kayıt stüdyolarımızda müzik yapımcıları ve besteciler için ideal çalışma ortamı.',
  },
  {
    icon: Disc,
    title: 'DJ Kabinleri ve Performans Alanları',
    description: 'DJ\'ler ve elektronik müzik sanatçıları için özel olarak tasarlanmış, profesyonel ekipmanlarla donatılmış kabinler ve performans alanları.',
  },
  {
    icon: MicVocal,
    title: 'Podcast Kayıt Stüdyoları',
    description: 'Podcaster\'lar ve ses içeriği üreticileri için akustik olarak optimize edilmiş, yüksek kaliteli kayıt imkanı sunan özel stüdyolar.',
  },
  {
    icon: Clapperboard,
    title: 'Fotoğraf Stüdyoları',
    description: 'Fotoğrafçılar için profesyonel ışıklandırma ve ekipmanlarla donatılmış, yaratıcı çekimler için ideal stüdyo ortamı.',
  },
  {
    icon: Clapperboard,
    title: 'Video Prodüksiyon Stüdyoları',
    description: 'Video yapımcıları ve yönetmenler için özel olarak tasarlanmış, profesyonel video çekimleri için gerekli tüm ekipmanlarla donatılmış stüdyolar.',
  },
  {
    icon: Users,
    title: 'Ortak Çalışma Alanları',
    description: 'Yaratıcı profesyoneller için rahat ve ilham verici ortak çalışma alanları. Networking ve işbirliği fırsatları için ideal ortam.',
  }
];

export const EVENTS: Event[] = [
    {
        id: 1,
        title: 'DJ Partisi ve Performans Gecesi',
        date: 'Ekim 26, 2024',
        type: 'Public',
        description: 'Canlı DJ performansları ve görsel projeksiyonlarla dolu bir gece. Yerel ve uluslararası DJ\'lerin katılımıyla.',
        imageUrl: 'https://picsum.photos/seed/event-dark1/600/400',
        status: 'Upcoming',
    },
    {
        id: 2,
        title: 'Networking Gecesi: Yaratıcı Endüstriler Buluşması',
        date: 'Kasım 15, 2024',
        type: 'Workshop',
        description: 'Farklı yaratıcı disiplinlerden profesyonellerin bir araya geldiği, işbirliği ve networking fırsatları sunan özel bir etkinlik.',
        imageUrl: 'https://picsum.photos/seed/event-dark2/600/400',
        status: 'Upcoming',
    },
    {
        id: 3,
        title: 'Akustik Performans Gecesi',
        date: 'Eylül 5, 2024',
        type: 'Public',
        description: 'Yerel sanatçıların akustik performanslarıyla dolu samimi bir gece.',
        imageUrl: 'https://picsum.photos/seed/event-dark3/600/400',
        status: 'Past',
    },
    {
        id: 4,
        title: 'Ses Tasarımı Atölyesi',
        date: 'Ağustos 20, 2024',
        type: 'Workshop',
        description: 'Profesyonel ses tasarımcıları tarafından verilen, temel ve ileri seviye tekniklerin öğretildiği kapsamlı bir atölye çalışması.',
        imageUrl: 'https://picsum.photos/seed/event-dark4/600/400',
        status: 'Past',
    }
];

export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
];

export const CONTACT_INFO = {
    address: 'Maslak, Ahi Evran Cd. No:5, 34475 Sarıyer/İstanbul',
    email: 'info@piststudyo.com',
    phone: '+90 541 863 67 53',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.8594621266713!2d29.00607387679631!3d41.11248491379633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5a25c523b21%3A0x4c76cf3dcc8b330b!2sAhi%20Evran%20Cd.%20No%3A5%2C%2034398%20Sar%C4%B1yer%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1687954321123!5m2!1str!2str'
}