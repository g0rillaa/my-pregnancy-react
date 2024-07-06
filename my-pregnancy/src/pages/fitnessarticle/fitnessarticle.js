import { Link } from 'react-router-dom';

import styles from './fitnessarticle.module.css'

const videos = [
    { name: 'Relaxing stability ball workout', desc: 'Relax with this stability ball workout that combines gentle movements to relieve stress and improve flexibility and core strength.', url: 'uznqUmKBDVw', time: '20 min' },
    { name: 'Intense cardio session', desc: 'Boost your cardiovascular fitness with this high-energy cardio session, perfect for burning calories and improving stamina.', url: 'T6_cRgYN40s', time: '30 min' },
    { name: 'Yoga for beginners', desc: 'A gentle introduction to yoga, focusing on basic poses and techniques to improve flexibility, strength, and balance.', url: 'v7AYKMP6rOE', time: '15 min' },
    { name: 'Quick HIIT workout', desc: 'An effective HIIT workout that burns calories and builds muscle in just 10 minutes, perfect for busy schedules.', url: 'ml6cT4AZdqI', time: '10 min' },
    { name: 'Meditation guide', desc: 'A guide to mindfulness and meditation techniques to reduce stress, improve concentration, and promote mental well-being.', url: 'inpok4MKVLM', time: '25 min' },
    { name: 'Strength training basics', desc: 'Learn the basics of strength training with exercises like squats, lunges, and push-ups to build muscle and improve strength.', url: 'UItWltVZZmE', time: '35 min' },
    { name: 'Advanced pilates', desc: 'Challenge yourself with advanced pilates exercises designed to improve core strength, flexibility, and overall body control.', url: 'lCg_gh_fppI', time: '40 min' },
    { name: 'Dance workout', desc: 'Get fit with this energetic dance workout that combines high-energy dance moves with fitness routines to burn calories and improve coordination.', url: 'ZWk19OVon2k', time: '45 min' },
    { name: 'Full body stretch', desc: 'A relaxing full body stretch routine to relieve muscle tension and improve flexibility, perfect for winding down or starting your day.', url: '6p6Y4gfFTrA', time: '20 min' },
    { name: 'Running tips for beginners', desc: 'Learn essential running techniques, proper form, and tips to avoid injuries, perfect for new runners.', url: 'buJkZw9pBOY', time: '10 min' }
];

function FitnessArticle(param){
    const video = videos[param.id]
    return (
        <div>
            <div className={styles.topinfo}>
                <Link to={`/fitness`}>
                    <h3 className={styles.backBtn}>&#8592; All Videos</h3>
                </Link>
                <h1 className="text-3xl font-medium">{video.name}</h1>
            </div>
            <div className={styles.body}>
                <div className={styles.innerbody}>
                    <h1 className="text-2xl font-medium">{video.name}</h1>
                    <iframe 
                        className={styles.embed}
                        src={`https://www.youtube-nocookie.com/embed/${video.url}`}
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        rel="0"
                        referrerPolicy="strict-origin-when-cross-origin" >
                    </iframe>
                    <h3 className={styles.time}>{`${video.time} watch`}</h3>
                    <h3 className={styles.desc}>{`${video.desc} watch`}</h3>
                </div>
            </div>
        </div>
    );
}

export default FitnessArticle;