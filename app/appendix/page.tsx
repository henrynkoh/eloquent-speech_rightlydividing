import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Appendix: Rightly Dividing - Kingdom Gospel vs. Grace Gospel | Leadership Communication Mastery',
  description: 'Understanding the distinction between Kingdom Gospel (circumcised) and Grace Gospel (uncircumcised) through rightly dividing the words of truth.',
};

export default function AppendixPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Appendix: Rightly Dividing the Words of Truth
            </span>
          </h1>
          <p className="text-2xl text-gray-700 mb-2">
            Kingdom Gospel vs. Grace Gospel
          </p>
          <p className="text-lg text-gray-600 italic">
            "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."
          </p>
          <p className="text-sm text-gray-500 mt-1">— 2 Timothy 2:15 (KJV)</p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-600">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">The Foundation of Rightly Dividing</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            To speak truth with confidence and authority, we must first understand truth itself. The Bible contains two distinct programs, 
            two different gospels, and two separate groups of people. Rightly dividing means recognizing these distinctions clearly, 
            without mixing what applies to one with what applies to the other.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This appendix provides a comprehensive examination of the Kingdom Gospel (given to the circumcised, Israel) and the Grace Gospel 
            (given to the uncircumcised, the Body of Christ). Understanding this division is essential for speaking truth with clarity and conviction.
          </p>
        </section>

        {/* Two Gospels Overview */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-lg p-8 mb-8 border border-amber-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Two Distinct Gospels</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Kingdom Gospel */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Kingdom Gospel</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Started:</strong> With Moses' law</p>
                <p><strong>Ended:</strong> Until John the Baptist</p>
                <p><strong>Apostle:</strong> Peter (Apostle of the Circumcised)</p>
                <p><strong>Audience:</strong> Israel (할례자 - Circumcised)</p>
                <p><strong>Message:</strong> "Repent, and be baptized... for the remission of sins"</p>
                <p className="text-sm italic text-gray-600">Acts 2:38</p>
              </div>
            </div>

            {/* Grace Gospel */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Grace Gospel</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Started:</strong> When Jesus declared "It is finished" on the Cross</p>
                <p><strong>Ends:</strong> Until the 2nd Coming of Jesus Christ</p>
                <p><strong>Apostle:</strong> Paul (Apostle of the Uncircumcised)</p>
                <p><strong>Audience:</strong> Gentiles (무할례자 - Uncircumcised)</p>
                <p><strong>Message:</strong> "Believe that Christ died, was buried, and rose again"</p>
                <p className="text-sm italic text-gray-600">1 Corinthians 15:3-4</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Law Cannot Save */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Law Cannot Save: No Flesh Justified by the Law</h2>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the knowledge of sin."
            </p>
            <p className="text-right text-gray-600">— Romans 3:20 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The law was never given as a means of salvation. Its purpose was to reveal sin, to show humanity that we cannot keep God's perfect standard. 
            The apostle Paul makes this clear throughout his epistles.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 3:10 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But that no man is justified by the law in the sight of God, it is evident: for, The just shall live by faith."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 3:11 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"I do not frustrate the grace of God: for if righteousness come by the law, then Christ is dead in vain."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 2:21 (KJV)</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            <strong>Why then would anyone require law-keeping from Gentile Christians when even Israel's forefathers could not keep it?</strong> 
            This is the question Paul addresses throughout his ministry. The law was given to Israel, and even they could not fulfill it. 
            How much more foolish it is to impose law-keeping on Gentiles who were never under the law to begin with.
          </p>
        </section>

        {/* Purpose of the Law */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Purpose of the Law: To Reveal Sin, Not to Save</h2>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith."
            </p>
            <p className="text-right text-gray-600">— Galatians 3:24 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            The law served as a tutor, a schoolmaster, to lead us to Christ. Once we come to Christ by faith, we are no longer under that tutor.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But after that faith is come, we are no longer under a schoolmaster."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 3:25 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For by the law is the knowledge of sin."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 3:20 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"What shall we say then? Is the law sin? God forbid. Nay, I had not known sin, but by the law: for I had not known lust, except the law had said, Thou shalt not covet."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 7:7 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Abraham Justified by Grace Before the Law */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Abraham: Justified by Grace Before the Law</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Even before Moses received the law, Abraham was justified by grace through faith. This proves that salvation has always been by grace, 
            not by law-keeping.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "For what saith the scripture? Abraham believed God, and it was counted unto him for righteousness."
            </p>
            <p className="text-right text-gray-600">— Romans 4:3 (KJV)</p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Now to him that worketh is the reward not reckoned of grace, but of debt. But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:4-5 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For the promise, that he should be the heir of the world, was not to Abraham, or to his seed, through the law, but through the righteousness of faith."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:13 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Therefore it is of faith, that it might be by grace; to the end the promise might be sure to all the seed; not to that only which is of the law, but to that also which is of the faith of Abraham; who is the father of us all."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:16 (KJV)</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Abraham lived before the law was given. Yet he was justified by faith, not by works. This demonstrates that salvation has always been 
            by grace through faith, even before the law existed. Now, in this age of grace, all people are justified by God's grace in the same way.
          </p>
        </section>

        {/* Salvation by Faith, Not Works */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Salvation by Faith: Whosoever Believeth</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."
            </p>
            <p className="text-right text-gray-600">— Ephesians 2:8-9 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Salvation is not achieved through human effort or good works. It is received by faith in Jesus Christ. Works are the fruit of salvation, 
            not the root. They flow from gratitude for the grace we have received, not as a means to earn what we cannot earn.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For whosoever shall call upon the name of the Lord shall be saved."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 10:13 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 10:9 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:5 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Therefore we conclude that a man is justified by faith without the deeds of the law."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 3:28 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Knowing that a man is not justified by the works of the law, but by the faith of Jesus Christ, even we have believed in Jesus Christ, that we might be justified by the faith of Christ, and not by the works of the law: for by the works of the law shall no flesh be justified."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 2:16 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Works as Fruit, Not Root */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Works: The Fruit of Grace, Not the Root of Salvation</h2>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Good works are not the means to salvation; they are the evidence of it. They flow from a heart filled with gratitude for the grace 
            we have received. We do not work to be saved; we work because we are saved.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Ephesians 2:10 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but faith which worketh by love."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 5:6 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 2:20 (KJV)</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            Works done in gratitude for grace are beautiful and pleasing to God. But works done to earn salvation are worthless, 
            for salvation cannot be earned. It is a gift received by faith.
          </p>
        </section>

        {/* Peter and Paul: Two Apostles, Two Gospels */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Two Apostles, Two Gospels</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Peter */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Peter: Apostle of the Circumcised (할례자)</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold mb-1">"And when James, Cephas, and John, who seemed to be pillars, perceived the grace that was given unto me, they gave to me and Barnabas the right hands of fellowship; that we should go unto the heathen, and they unto the circumcision."</p>
                  <p className="text-xs text-gray-600 text-right">— Galatians 2:9 (KJV)</p>
                </div>
                <p><strong>Audience:</strong> Israel (Circumcised)</p>
                <p><strong>Message:</strong> "Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins"</p>
                <p className="text-sm italic text-gray-600">Acts 2:38</p>
                <p><strong>Kingdom Gospel:</strong> For Israel, pointing to the coming Kingdom on earth</p>
              </div>
            </div>

            {/* Paul */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Paul: Apostle of the Uncircumcised (무할례자)</h3>
              <div className="space-y-3 text-gray-700">
                <div className="bg-white p-3 rounded">
                  <p className="font-semibold mb-1">"For I speak to you Gentiles, inasmuch as I am the apostle of the Gentiles, I magnify mine office."</p>
                  <p className="text-xs text-gray-600 text-right">— Romans 11:13 (KJV)</p>
                </div>
                <p><strong>Audience:</strong> Gentiles (Uncircumcised)</p>
                <p><strong>Message:</strong> "That Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day"</p>
                <p className="text-sm italic text-gray-600">1 Corinthians 15:3-4</p>
                <p><strong>Grace Gospel:</strong> For the Body of Christ, the mystery revealed</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              "But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter."
            </p>
            <p className="text-right text-gray-600">— Galatians 2:7 (KJV)</p>
          </div>
        </section>

        {/* Only One Gospel for Today */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Only One Gospel for Today: The Grace Gospel</h2>
          
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "For other foundation can no man lay than that is laid, which is Jesus Christ. Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble; Every man's work shall be made manifest."
            </p>
            <p className="text-right text-gray-600">— 1 Corinthians 3:11-13 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            There is only one foundation: Jesus Christ. And there is only one gospel for today: the grace gospel that Paul was given to preach. 
            This is the gospel we must believe and proclaim.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 1:11-12 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 1:8 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"As we said before, so say I now again, If any man preach any other gospel unto you than that ye have received, let him be accursed."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 1:9 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Now to him that is of power to stablish you according to my gospel, and the preaching of Jesus Christ, according to the revelation of the mystery, which was kept secret since the world began."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 16:25 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Beware of False Gospels */}
        <section className="bg-red-50 rounded-xl shadow-lg p-8 mb-8 border-l-4 border-red-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Beware: False Gospels Seek to Trouble You</h2>
          
          <div className="bg-white p-6 rounded-lg mb-6">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel: Which is not another; but there be some that trouble you, and would pervert the gospel of Christ."
            </p>
            <p className="text-right text-gray-600">— Galatians 1:6-7 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            There are those who would trouble you with false gospels, mixing law with grace, requiring works for salvation, or adding conditions 
            to the free gift of God. Do not be deceived.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 5:1 (KJV)</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For if ye be led of the Spirit, ye are not under the law."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 5:18 (KJV)</p>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Christ is become of no effect unto you, whosoever of you are justified by the law; ye are fallen from grace."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Galatians 5:4 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Timeline of the Two Gospels */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Timeline: When Each Gospel Began and Ends</h2>
          
          <div className="space-y-6">
            {/* Kingdom Gospel Timeline */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kingdom Gospel Timeline</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Started: With Moses' Law</p>
                  <p className="text-gray-700 mb-1">"The law was given by Moses, but grace and truth came by Jesus Christ."</p>
                  <p className="text-sm text-gray-600 text-right">— John 1:17 (KJV)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Ended: Until John the Baptist</p>
                  <p className="text-gray-700 mb-1">"The law and the prophets were until John: since that time the kingdom of God is preached, and every man presseth into it."</p>
                  <p className="text-sm text-gray-600 text-right">— Luke 16:16 (KJV)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">"For all the prophets and the law prophesied until John."</p>
                  <p className="text-sm text-gray-600 text-right">— Matthew 11:13 (KJV)</p>
                </div>
              </div>
            </div>

            {/* Grace Gospel Timeline */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Grace Gospel Timeline</h3>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Started: When Jesus Declared "It is Finished"</p>
                  <p className="text-gray-700 mb-1">"When Jesus therefore had received the vinegar, he said, It is finished: and he bowed his head, and gave up the ghost."</p>
                  <p className="text-sm text-gray-600 text-right">— John 19:30 (KJV)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Revealed to: Paul</p>
                  <p className="text-gray-700 mb-1">"How that by revelation he made known unto me the mystery; (as I wrote afore in few words, Whereby, when ye read, ye may understand my knowledge in the mystery of Christ) Which in other ages was not made known unto the sons of men, as it is now revealed unto his holy apostles and prophets by the Spirit."</p>
                  <p className="text-sm text-gray-600 text-right">— Ephesians 3:3-5 (KJV)</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="font-semibold text-gray-900 mb-2">Ends: Until the 2nd Coming of Jesus Christ</p>
                  <p className="text-gray-700 mb-1">"For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord."</p>
                  <p className="text-sm text-gray-600 text-right">— 1 Thessalonians 4:16-17 (KJV)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Key Verses */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Key Verses: Rightly Dividing Truth</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For sin shall not have dominion over you: for ye are not under the law, but under grace."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 6:14 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 8:1 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For the law of the Spirit of life in Christ Jesus hath made me free from the law of sin and death."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 8:2 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For Christ is the end of the law for righteousness to every one that believeth."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 10:4 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Blotting out the handwriting of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Colossians 2:14 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days: Which are a shadow of things to come; but the body is of Christ."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Colossians 2:16-17 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For the law having a shadow of good things to come, and not the very image of the things, can never with those sacrifices which they offered year by year continually make the comers thereunto perfect."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Hebrews 10:1 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"In that he saith, A new covenant, he hath made the first old. Now that which decayeth and waxeth old is ready to vanish away."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Hebrews 8:13 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"But now the righteousness of God without the law is manifested, being witnessed by the law and the prophets; Even the righteousness of God which is by faith of Jesus Christ unto all and upon all them that believe: for there is no difference."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 3:21-22 (KJV)</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-800 mb-2">
                <strong>"For the promise, that he should be the heir of the world, was not to Abraham, or to his seed, through the law, but through the righteousness of faith."</strong>
              </p>
              <p className="text-sm text-gray-600 text-right">— Romans 4:13 (KJV)</p>
            </div>
          </div>
        </section>

        {/* Principles of Doctrine vs. Perfection */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Principles of the Doctrine of Christ vs. Unto Perfection
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "Therefore leaving the principles of the doctrine of Christ, let us go on unto perfection; not laying again the foundation of repentance from dead works, and of faith toward God, Of the doctrine of baptisms, and of laying on of hands, and of resurrection of the dead, and of eternal judgment."
            </p>
            <p className="text-right text-gray-600 text-lg">— Hebrews 6:1-2 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The writer of Hebrews distinguishes between two levels of understanding: the foundational principles (기초원리) 
            and the path to perfection (완전한 원리). This distinction is crucial for rightly dividing the word of truth. 
            We must understand the foundation, but we must not remain there. We are called to move beyond the basics 
            and press toward maturity and perfection.
          </p>

          {/* Foundation Principles */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Foundation: Principles of the Doctrine of Christ (기초원리)</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The foundation consists of six essential principles that every believer must understand. These are the ABCs of the faith, 
              the milk for babes. But the writer of Hebrews urges us not to lay this foundation again and again—we must build upon it.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* 1. Repentance from Dead Works */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-xl font-bold text-gray-900 mb-3">1. Repentance from Dead Works</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And the times of this ignorance God winked at; but now commandeth all men every where to repent."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Acts 17:30 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"Repent ye therefore, and be converted, that your sins may be blotted out."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Acts 3:19 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For godly sorrow worketh repentance to salvation not to be repented of: but the sorrow of the world worketh death."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 2 Corinthians 7:10 (KJV)</p>
                  </div>
                </div>
              </div>

              {/* 2. Faith Toward God */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-gray-900 mb-3">2. Faith Toward God</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"Now faith is the substance of things hoped for, the evidence of things not seen."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Hebrews 11:1 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Hebrews 11:6 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Ephesians 2:8 (KJV)</p>
                  </div>
                </div>
              </div>

              {/* 3. Doctrine of Baptisms */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="text-xl font-bold text-gray-900 mb-3">3. Doctrine of Baptisms</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"I indeed baptize you with water unto repentance: but he that cometh after me is mightier than I, whose shoes I am not worthy to bear: he shall baptize you with the Holy Ghost, and with fire."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 3:11 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 12:13 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For as many of you as have been baptized into Christ have put on Christ."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Galatians 3:27 (KJV)</p>
                  </div>
                </div>
              </div>

              {/* 4. Laying on of Hands */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-gray-900 mb-3">4. Laying on of Hands</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And when Simon saw that through laying on of the apostles' hands the Holy Ghost was given, he offered them money."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Acts 8:18 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"Neglect not the gift that is in thee, which was given thee by prophecy, with the laying on of the hands of the presbytery."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Timothy 4:14 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"Wherefore I put thee in remembrance that thou stir up the gift of God, which is in thee by the putting on of my hands."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 2 Timothy 1:6 (KJV)</p>
                  </div>
                </div>
              </div>

              {/* 5. Resurrection of the Dead */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="text-xl font-bold text-gray-900 mb-3">5. Resurrection of the Dead</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— John 5:29 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For if the dead rise not, then is not Christ raised: And if Christ be not raised, your faith is vain; ye are yet in your sins."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 15:16-17 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"But now is Christ risen from the dead, and become the firstfruits of them that slept."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 15:20 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Thessalonians 4:16 (KJV)</p>
                  </div>
                </div>
              </div>

              {/* 6. Eternal Judgment */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border-l-4 border-indigo-500">
                <h4 className="text-xl font-bold text-gray-900 mb-3">6. Eternal Judgment</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And these shall go away into everlasting punishment: but the righteous into life eternal."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 25:46 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Revelation 20:12 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 2 Corinthians 5:10 (KJV)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>These six principles form the foundation.</strong> They are essential, but they are the beginning, not the end. 
                The writer of Hebrews says we must leave these principles—not abandon them, but move beyond them. We must not 
                keep laying the foundation again and again. We must build upon it.
              </p>
            </div>
          </div>

          {/* Unto Perfection */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Unto Perfection: Moving Beyond the Foundation (완전한 원리)</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Perfection here does not mean sinless perfection. It means maturity, completeness, full growth. It means moving from 
              milk to strong meat, from being a babe to being a teacher, from the basics to the deep things of God.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-lg">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "For when for the time ye ought to be teachers, ye have need that one teach you again which be the first principles of the oracles of God; and are become such as have need of milk, and not of strong meat."
              </p>
              <p className="text-right text-gray-600">— Hebrews 5:12 (KJV)</p>
            </div>

            <div className="space-y-6">
              {/* Strong Meat */}
              <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Strong Meat: The Food of the Mature</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"For every one that useth milk is unskilful in the word of righteousness: for he is a babe. But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Hebrews 5:13-14 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Strong meat is for those who are mature, who have exercised their spiritual senses to discern good and evil. 
                    This is the food of perfection—not the basics, but the deep things of God.
                  </p>
                </div>
              </div>

              {/* Full Assurance */}
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Full Assurance: Confidence in God's Promises</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"That ye be not slothful, but followers of them who through faith and patience inherit the promises."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Hebrews 6:12 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"Wherein God, willing more abundantly to shew unto the heirs of promise the immutability of his counsel, confirmed it by an oath: That by two immutable things, in which it was impossible for God to lie, we might have a strong consolation, who have fled for refuge to lay hold upon the hope set before us."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Hebrews 6:17-18 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Perfection includes full assurance—not doubting, but having strong confidence in God's promises. This comes 
                    through faith and patience, not through repeatedly laying the foundation.
                  </p>
                </div>
              </div>

              {/* Spiritual Gifts and Ministry */}
              <div className="bg-white border-2 border-indigo-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Spiritual Gifts and Ministry: Building Up the Body</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"Follow after charity, and desire spiritual gifts, but rather that ye may prophesy."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— 1 Corinthians 14:1 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ: Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Ephesians 4:11-13 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Perfection includes using spiritual gifts to build up the body of Christ, moving from being a babe to being 
                    a teacher, from receiving to giving.
                  </p>
                </div>
              </div>

              {/* Walking by the Spirit */}
              <div className="bg-white border-2 border-pink-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Walking by the Spirit: Living in Freedom</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"If we live in the Spirit, let us also walk in the Spirit."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Galatians 5:25 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"For as many as are led by the Spirit of God, they are the sons of God."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Romans 8:14 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Galatians 5:16 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Perfection means walking by the Spirit, not by rules. It means being led by the Spirit, not by formulas. 
                    This is maturity—freedom in Christ, not bondage to the law.
                  </p>
                </div>
              </div>

              {/* The Mind of Christ */}
              <div className="bg-white border-2 border-yellow-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">The Mind of Christ: Thinking Like God</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Christ."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:16 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Romans 12:2 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"Let this mind be in you, which was also in Christ Jesus."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Philippians 2:5 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Perfection includes having the mind of Christ—thinking like God thinks, seeing things from God's perspective, 
                    understanding the deep things of God.
                  </p>
                </div>
              </div>

              {/* Love: The Perfect Bond */}
              <div className="bg-white border-2 border-red-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Love: The Perfect Bond of Maturity</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"And above all these things put on charity, which is the bond of perfectness."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Colossians 3:14 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"But the end of the commandment is charity out of a pure heart, and of a good conscience, and of faith unfeigned."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— 1 Timothy 1:5 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"And now abideth faith, hope, charity, these three; but the greatest of these is charity."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— 1 Corinthians 13:13 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Perfection is characterized by love—not the love of the world, but the love of God. This is the bond of 
                    perfectness, the mark of maturity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Distinction */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mb-8 border-2 border-indigo-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Clear Distinction</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Foundation Principles (기초원리)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>Milk for babes (Hebrews 5:12-13)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>The ABCs of the faith</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>Essential but elementary</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>Must be understood, but not repeated endlessly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 font-bold mr-2">•</span>
                    <span>The starting point, not the destination</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Unto Perfection (완전한 원리)</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>Strong meat for the mature (Hebrews 5:14)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>Deep things of God</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>Full assurance and confidence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>Walking by the Spirit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">•</span>
                    <span>Building up others, not just being fed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As newborn babes, desire the sincere milk of the word, that ye may grow thereby."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 2:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I have fed you with milk, and not with meat: for hitherto ye were not able to bear it, neither yet now are ye able."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Brethren, be not children in understanding: howbeit in malice be ye children, but in understanding be men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 14:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Not that I have already attained, either were already perfect: but I follow after, if that I may apprehend that for which also I am apprehended of Christ Jesus."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 3:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let us therefore, as many as be perfect, be thus minded: and if in any thing ye be otherwise minded, God shall reveal even this unto you."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 3:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But the God of all grace, who hath called us unto his eternal glory by Christ Jesus, after that ye have suffered a while, make you perfect, stablish, strengthen, settle you."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 5:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Epaphras, who is one of you, a servant of Christ, saluteth you, always labouring fervently for you in prayers, that ye may stand perfect and complete in all the will of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 4:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"That the man of God may be perfect, throughly furnished unto all good works."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 3:17 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 3:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 4:13 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the distinction between foundation principles and perfection has direct application to how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Foundation:</strong> Learning the basics of communication—eliminating filler words, mastering posture, understanding structure. This is essential, but it's the beginning.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Perfection:</strong> Moving beyond techniques to understanding truth itself. Speaking from a place of being already approved, not seeking approval. Being led by the Spirit in each moment, not following formulas.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>The Goal:</strong> Not to keep practicing the basics forever, but to build upon them. To move from being a student to being a teacher. To speak with the authority that comes from maturity in truth.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means knowing when you're dealing with foundation principles and when you're dealing with perfection. 
              It means not staying a babe forever, but pressing on to maturity. This is how we speak truth with confidence and authority.
            </p>
          </div>
        </section>

        {/* Paul's Declaration of the Gospel */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Paul's Declaration: The Grace Gospel (1 Corinthians 15:1-4)
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand; By which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain. For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures."
            </p>
            <p className="text-right text-gray-600 text-lg">— 1 Corinthians 15:1-4 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This is the gospel Paul received by revelation from Jesus Christ. This is the gospel for today—the grace gospel 
            that saves all who believe. It is simple, clear, and complete: Christ died for our sins, was buried, and rose again. 
            Nothing more, nothing less. This is the foundation of our faith and the source of our confidence in communication.
          </p>

          {/* The Three Essential Facts */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Three Essential Facts of the Grace Gospel</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* 1. Christ Died for Our Sins */}
              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">1. Christ Died for Our Sins</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 15:3 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Romans 5:8 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"Who his own self bare our sins in his own body on the tree, that we, being dead to sins, should live unto righteousness: by whose stripes ye were healed."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Peter 2:24 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For Christ also hath once suffered for sins, the just for the unjust, that he might bring us to God."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Peter 3:18 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For he hath made him to be sin for us, who knew no sin; that we might be made the righteousness of God in him."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 2 Corinthians 5:21 (KJV)</p>
                  </div>
                </div>
              </div>

              {/* 2. He Was Buried */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-6 border-l-4 border-gray-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">2. He Was Buried</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And that he was buried, and that he rose again the third day according to the scriptures."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 15:4 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And he made his grave with the wicked, and with the rich in his death; because he had done no violence, neither was any deceit in his mouth."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Isaiah 53:9 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And when Joseph had taken the body, he wrapped it in a clean linen cloth, And laid it in his own new tomb, which he had hewn out in the rock: and he rolled a great stone to the door of the sepulchre, and departed."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 27:59-60 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"He was taken from prison and from judgment: and who shall declare his generation? for he was cut off out of the land of the living: for the transgression of my people was he stricken."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Isaiah 53:8 (KJV)</p>
                  </div>
                </div>
              </div>

              {/* 3. He Rose Again */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">3. He Rose Again</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And that he was buried, and that he rose again the third day according to the scriptures."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 15:4 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"But now is Christ risen from the dead, and become the firstfruits of them that slept."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 15:20 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And if Christ be not raised, your faith is vain; ye are yet in your sins."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 15:17 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"But if the Spirit of him that raised up Jesus from the dead dwell in you, he that raised up Christ from the dead shall also quicken your mortal bodies by his Spirit that dwelleth in you."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Romans 8:11 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"Who was delivered for our offences, and was raised again for our justification."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Romans 4:25 (KJV)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Gospel That Saves */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Gospel That Saves: By Which Ye Are Saved</h3>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "By which also ye are saved, if ye keep in memory what I preached unto you, unless ye have believed in vain."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 15:2 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This gospel saves. Not by works, not by law-keeping, not by water baptism, not by speaking in tongues—but by believing 
              this simple message: Christ died for our sins, was buried, and rose again. This is the power of God unto salvation.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 2:8-9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 4:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 10:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For whosoever shall call upon the name of the Lord shall be saved."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 10:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Therefore we conclude that a man is justified by faith without the deeds of the law."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 3:28 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Received by Revelation */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Received by Revelation: Not from Man</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Paul did not receive this gospel from the other apostles. He did not learn it in Jerusalem. He received it directly 
              from the risen, glorified Lord Jesus Christ by revelation. This is the mystery that was kept secret since the world began.
            </p>

            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-4">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  "But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ."
                </p>
                <p className="text-right text-gray-600">— Galatians 1:11-12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Now to him that is of power to stablish you according to my gospel, and the preaching of Jesus Christ, according to the revelation of the mystery, which was kept secret since the world began."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 16:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"How that by revelation he made known unto me the mystery; (as I wrote afore in few words, Whereby, when ye read, ye may understand my knowledge in the mystery of Christ) Which in other ages was not made known unto the sons of men, as it is now revealed unto his holy apostles and prophets by the Spirit."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 3:3-5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Even the mystery which hath been hid from ages and from generations, but now is made manifest to his saints: To whom God would make known what is the riches of the glory of this mystery among the Gentiles; which is Christ in you, the hope of glory."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 1:26-27 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I would not, brethren, that ye should be ignorant of this mystery, lest ye should be wise in your own conceits; that blindness in part is happened to Israel, until the fulness of the Gentiles be come in."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:25 (KJV)</p>
              </div>
            </div>
          </div>

          {/* According to the Scriptures */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">According to the Scriptures: Fulfilled Prophecy</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Paul emphasizes that Christ's death, burial, and resurrection happened "according to the scriptures." This was not 
              an accident or a surprise. It was the fulfillment of prophecy, the completion of God's plan from before the foundation of the world.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 15:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And that he was buried, and that he rose again the third day according to the scriptures."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 15:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then he said unto them, O fools, and slow of heart to believe all that the prophets have spoken: Ought not Christ to have suffered these things, and to enter into his glory? And beginning at Moses and all the prophets, he expounded unto them in all the scriptures the things concerning himself."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Luke 24:25-27 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he said unto them, These are the words which I spake unto you, while I was yet with you, that all things must be fulfilled, which were written in the law of Moses, and in the prophets, and in the psalms, concerning me."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Luke 24:44 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 53:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Yet it pleased the LORD to bruise him; he hath put him to grief: when thou shalt make his soul an offering for sin, he shall see his seed, he shall prolong his days, and the pleasure of the LORD shall prosper in his hand."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 53:10 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Simplicity of the Gospel */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Simplicity of the Gospel: Nothing Added, Nothing Taken Away</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                The grace gospel is simple. It requires no works, no water baptism, no law-keeping, no signs, no speaking in tongues. 
                It requires only faith in the finished work of Christ: His death, burial, and resurrection.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But I fear, lest by any means, as the serpent beguiled Eve through his subtilty, so your minds should be corrupted from the simplicity that is in Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 11:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For Christ sent me not to baptize, but to preach the gospel: not with wisdom of words, lest the cross of Christ should be made of none effect."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 1:17 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the preaching of the cross is to them that perish foolishness; but unto us which are saved it is the power of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 1:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But we preach Christ crucified, unto the Jews a stumblingblock, and unto the Greeks foolishness; But unto them which are called, both Jews and Greeks, Christ the power of God, and the wisdom of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 1:23-24 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I determined not to know any thing among you, save Jesus Christ, and him crucified."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:2 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Result: Standing in the Gospel */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Result: Standing in the Gospel</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 15:1 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you believe this gospel, you stand in it. You are established, secure, sealed. You don't stand in your works, 
              your performance, or your law-keeping. You stand in the gospel of grace.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"In whom ye also trusted, after that ye heard the word of truth, the gospel of your salvation: in whom also after that ye believed, ye were sealed with that holy Spirit of promise."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 1:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Who hath also sealed us, and given the earnest of the Spirit in our hearts."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 1:22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And I am persuaded, that he is able to keep that which I have committed unto him against that day."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 1:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 10:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I am persuaded, that neither death, nor life, nor angels, nor principalities, nor powers, nor things present, nor things to come, Nor height, nor depth, nor any other creature, shall be able to separate us from the love of God, which is in Christ Jesus our Lord."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 8:38-39 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Now unto him that is able to keep you from falling, and to present you faultless before the presence of his glory with exceeding joy."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Jude 1:24 (KJV)</p>
              </div>
            </div>
          </div>

          {/* No Other Gospel */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">No Other Gospel: Beware of Additions</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed."
              </p>
              <p className="text-right text-gray-600">— Galatians 1:8 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Any gospel that adds to or takes away from the simple message of 1 Corinthians 15:1-4 is a false gospel. 
              Beware of those who would add water baptism, law-keeping, works, or any other requirement to the grace gospel.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As we said before, so say I now again, If any man preach any other gospel unto you than that ye have received, let him be accursed."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel: Which is not another; but there be some that trouble you, and would pervert the gospel of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Christ is become of no effect unto you, whosoever of you are justified by the law; ye are fallen from grace."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 5:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 5:1 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding Paul's declaration of the grace gospel transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Confidence:</strong> When you know you're saved by grace through faith alone, you speak with confidence. You're not trying to earn approval; you're speaking from a place of being already approved.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Clarity:</strong> The gospel is simple. When you understand it simply, you can communicate it simply. No need for complex theology or added requirements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Authority:</strong> You're not sharing your opinion or a theory. You're declaring the gospel that saves—the gospel Paul received by revelation from Jesus Christ.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Freedom:</strong> You're free from the burden of trying to prove yourself. The gospel has already proven you righteous. Speak from that freedom.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              This is the gospel that saves. This is the gospel we stand in. This is the gospel we declare. When you understand this, 
              you speak with the authority and confidence that comes from knowing the truth—the simple, powerful, saving truth of the grace gospel.
            </p>
          </div>
        </section>

        {/* Receive Reward vs. Suffer Loss */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Receive a Reward vs. Suffer Loss: Each Man's Work (1 Corinthians 3:10-15)
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation, and another buildeth thereon. But let every man take heed how he buildeth thereupon. For other foundation can no man lay than that is laid, which is Jesus Christ. Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble; Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is. If any man's work abide which he hath built thereupon, he shall receive a reward. If any man's work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."
            </p>
            <p className="text-right text-gray-600 text-lg">— 1 Corinthians 3:10-15 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            This passage reveals a crucial distinction: salvation is by grace through faith, but rewards are based on our works. 
            Every believer is saved, but not every believer receives rewards. Some build with gold, silver, and precious stones 
            (valuable works that abide); others build with wood, hay, and stubble (worthless works that burn). Understanding this 
            distinction is essential for rightly dividing the word of truth.
          </p>

          {/* The Foundation: Jesus Christ */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Foundation: Jesus Christ Alone</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "For other foundation can no man lay than that is laid, which is Jesus Christ."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 3:11 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The foundation is Jesus Christ. This foundation is laid by God, not by man. No one can lay a different foundation. 
              All believers stand on the same foundation—the finished work of Christ. Salvation is secure because the foundation is secure.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For other foundation can no man lay than that is laid, which is Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Therefore thus saith the Lord GOD, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 28:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Jesus saith unto them, Did ye never read in the scriptures, The stone which the builders rejected, the same is become the head of the corner: this is the Lord's doing, and it is marvellous in our eyes?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 21:42 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"To whom coming, as unto a living stone, disallowed indeed of men, but chosen of God, and precious, Ye also, as lively stones, are built up a spiritual house, an holy priesthood, to offer up spiritual sacrifices, acceptable to God by Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 2:4-5 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Building Materials: Gold, Silver, Precious Stones vs. Wood, Hay, Stubble */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Building Materials: Valuable vs. Worthless</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Valuable Materials */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Gold, Silver, Precious Stones</h4>
                <p className="text-lg text-gray-700 mb-4">
                  These represent valuable works that abide the fire—works done in the Spirit, for God's glory, with eternal value.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"Now if any man build upon this foundation gold, silver, precious stones..."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 3:12 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"If any man's work abide which he hath built thereupon, he shall receive a reward."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 3:14 (KJV)</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Examples:</strong> Works done by the Spirit, for God's glory, with love, building up the body of Christ, 
                    using spiritual gifts, walking in the Spirit, serving others, sharing the gospel.
                  </p>
                </div>
              </div>

              {/* Worthless Materials */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-6 border-l-4 border-gray-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Wood, Hay, Stubble</h4>
                <p className="text-lg text-gray-700 mb-4">
                  These represent worthless works that burn—works done in the flesh, for self-glory, with no eternal value.
                </p>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"...wood, hay, stubble..."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 3:12 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"If any man's work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 3:15 (KJV)</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Examples:</strong> Works done in the flesh, for self-glory, without love, building on self, 
                    following the law for approval, seeking human praise, empty religious rituals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Receive a Reward */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Receive a Reward: When Works Abide</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "If any man's work abide which he hath built thereupon, he shall receive a reward."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 3:14 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you build with gold, silver, and precious stones—valuable works done in the Spirit—your works will abide the fire. 
              You will receive a reward. This is not about earning salvation; it's about receiving rewards for faithful service.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any man's work abide which he hath built thereupon, he shall receive a reward."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 5:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And, behold, I come quickly; and my reward is with me, to give every man according as his work shall be."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Revelation 22:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the Son of man shall come in the glory of his Father with his angels; and then he shall reward every man according to his works."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 16:27 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hebrews 11:6 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Know ye not that they which run in a race run all, but one receiveth the prize? So run, that ye may obtain."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 9:24 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And every man that striveth for the mastery is temperate in all things. Now they do it to obtain a corruptible crown; but we an incorruptible."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 9:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Henceforth there is laid up for me a crown of righteousness, which the Lord, the righteous judge, shall give me at that day: and not to me only, but unto all them also that love his appearing."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 4:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Blessed is the man that endureth temptation: for when he is tried, he shall receive the crown of life, which the Lord hath promised to them that love him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— James 1:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And when the chief Shepherd shall appear, ye shall receive a crown of glory that fadeth not away."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 5:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Behold, I come quickly: hold that fast which thou hast, that no man take thy crown."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Revelation 3:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For what is our hope, or joy, or crown of rejoicing? Are not even ye in the presence of our Lord Jesus Christ at his coming?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Thessalonians 2:19 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Suffer Loss */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Suffer Loss: When Works Are Burned</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "If any man's work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 3:15 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When you build with wood, hay, and stubble—worthless works done in the flesh—your works will be burned. 
              You will suffer loss. But notice: you yourself will be saved. Salvation is not lost, but rewards are. 
              This is the crucial distinction: salvation is by grace; rewards are by works.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any man's work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 5:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For other foundation can no man lay than that is laid, which is Jesus Christ. Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble; Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:11-13 (KJV)</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6 rounded">
              <p className="text-lg font-semibold text-gray-900 mb-2">Important Distinction:</p>
              <p className="text-gray-800 leading-relaxed">
                <strong>Salvation is not lost.</strong> The verse clearly states: "but he himself shall be saved." 
                Salvation is by grace through faith, not by works. But <strong>rewards are lost.</strong> Works done in the flesh 
                burn up, and the believer suffers loss—loss of rewards, not loss of salvation.
              </p>
            </div>
          </div>

          {/* The Fire: Testing Works */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Fire: Testing Every Man's Work</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The day will declare every man's work. Fire will test it. Valuable works (gold, silver, precious stones) will abide. 
              Worthless works (wood, hay, stubble) will burn. This is not about salvation; it's about rewards.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But who may abide the day of his coming? and who shall stand when he appeareth? for he is like a refiner's fire, and like fullers' soap."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Malachi 3:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he shall sit as a refiner and purifier of silver: and he shall purify the sons of Levi, and purge them as gold and silver, that they may offer unto the LORD an offering in righteousness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Malachi 3:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"That the trial of your faith, being much more precious than of gold that perisheth, though it be tried with fire, might be found unto praise and honour and glory at the appearing of Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 1:7 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Salvation vs. Rewards: The Crucial Distinction */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Salvation vs. Rewards: The Crucial Distinction</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Salvation */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Salvation (By Grace)</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Ephesians 2:8-9 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"But he himself shall be saved; yet so as by fire."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 3:15 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"And I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— John 10:28 (KJV)</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Key Point:</strong> Salvation is by grace through faith. It cannot be lost. Even if all works burn, 
                    the believer is still saved.
                  </p>
                </div>
              </div>

              {/* Rewards */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Rewards (By Works)</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"If any man's work abide which he hath built thereupon, he shall receive a reward."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 3:14 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"If any man's work shall be burned, he shall suffer loss: but he himself shall be saved."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 1 Corinthians 3:15 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— 2 Corinthians 5:10 (KJV)</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Key Point:</strong> Rewards are based on works. Valuable works receive rewards. Worthless works suffer loss. 
                    But salvation is never lost.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Build with Valuable Materials */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">How to Build with Gold, Silver, and Precious Stones</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              To build works that abide and receive rewards, we must build in the Spirit, for God's glory, with love. 
              Here's what that looks like:
            </p>

            <div className="space-y-6">
              {/* Building in the Spirit */}
              <div className="bg-white border-2 border-indigo-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Building in the Spirit</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"If we live in the Spirit, let us also walk in the Spirit."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Galatians 5:25 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"For as many as are led by the Spirit of God, they are the sons of God."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Romans 8:14 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"This I say then, Walk in the Spirit, and ye shall not fulfil the lust of the flesh."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Galatians 5:16 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Works done in the Spirit are valuable. Works done in the flesh are worthless. Walk in the Spirit, 
                    and your works will be gold, silver, and precious stones.
                  </p>
                </div>
              </div>

              {/* Building for God's Glory */}
              <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Building for God's Glory</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— 1 Corinthians 10:31 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"And whatsoever ye do, do it heartily, as to the Lord, and not unto men; Knowing that of the Lord ye shall receive the reward of the inheritance: for ye serve the Lord Christ."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Colossians 3:23-24 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Matthew 5:16 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Works done for God's glory are valuable. Works done for self-glory are worthless. Do all to the glory of God.
                  </p>
                </div>
              </div>

              {/* Building with Love */}
              <div className="bg-white border-2 border-pink-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Building with Love</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"And though I bestow all my goods to feed the poor, and though I give my body to be burned, and have not charity, it profiteth me nothing."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— 1 Corinthians 13:3 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but faith which worketh by love."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Galatians 5:6 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"And above all these things put on charity, which is the bond of perfectness."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Colossians 3:14 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Works done with love are valuable. Works done without love are worthless. Love is the bond of perfectness.
                  </p>
                </div>
              </div>

              {/* Building Up the Body */}
              <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Building Up the Body of Christ</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Ephesians 4:12 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— Ephesians 4:29 (KJV)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="text-gray-800 mb-2">
                      <strong>"Even so ye, forasmuch as ye are zealous of spiritual gifts, seek that ye may excel to the edifying of the church."</strong>
                    </p>
                    <p className="text-sm text-gray-600 text-right">— 1 Corinthians 14:12 (KJV)</p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Works that build up the body of Christ are valuable. Works that tear down or serve self are worthless.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But let every man prove his own work, and then shall he have rejoicing in himself alone, and not in another."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 6:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we are labourers together with God: ye are God's husbandry, ye are God's building."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But let every man take heed how he buildeth thereupon."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation, and another buildeth thereon."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For other foundation can no man lay than that is laid, which is Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any man's work abide which he hath built thereupon, he shall receive a reward."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any man's work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"So then every one of us shall give account of himself to God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 14:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 2:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"That ye might walk worthy of the Lord unto all pleasing, being fruitful in every good work, and increasing in the knowledge of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 1:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 15:58 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And let us not be weary in well doing: for in due season we shall reap, if we faint not."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 6:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And whatsoever ye do, do it heartily, as to the Lord, and not unto men; Knowing that of the Lord ye shall receive the reward of the inheritance: for ye serve the Lord Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 3:23-24 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the distinction between receiving rewards and suffering loss transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Security in Salvation:</strong> You're saved by grace, not by your communication skills. This eliminates fear and gives you freedom to speak boldly.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Motivation for Excellence:</strong> While salvation is secure, rewards are based on how you build. Build with valuable materials—speak in the Spirit, for God's glory, with love.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Building with Gold:</strong> Communication done in the Spirit, for God's glory, building up others—this is gold, silver, precious stones that will receive rewards.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Avoiding Wood, Hay, Stubble:</strong> Communication done in the flesh, for self-glory, tearing down others—this is wood, hay, stubble that will burn.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>The Foundation:</strong> All communication must be built on the foundation of Jesus Christ. No other foundation will stand.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding that salvation is by grace (secure), but rewards are by works (earned). 
              Build your communication on the foundation of Christ, in the Spirit, for God's glory, with love. This is how you 
              build works that abide and receive rewards.
            </p>
          </div>
        </section>

        {/* Wise Masterbuilder and the Foundation */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Paul as a Wise Masterbuilder: Laying the Foundation (1 Corinthians 3:10)
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation, and another buildeth thereon. But let every man take heed how he buildeth thereupon."
            </p>
            <p className="text-right text-gray-600 text-lg">— 1 Corinthians 3:10 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Paul describes himself as a wise masterbuilder—an architect, a chief builder—who laid the foundation. 
            This foundation is the grace gospel, the message of Christ's death, burial, and resurrection. Others build upon this foundation, 
            but each must take heed how they build. Understanding Paul's role as the masterbuilder and the foundation he laid is essential 
            for rightly dividing the word of truth.
          </p>

          {/* Paul as Wise Masterbuilder */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Paul: The Wise Masterbuilder</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 3:10 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Paul was not just a preacher or teacher. He was the wise masterbuilder—the architect, the chief builder—who laid 
              the foundation for the Body of Christ. This was not his own doing; it was according to the grace of God given to him. 
              He received this by revelation from the risen, glorified Lord Jesus Christ.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation, and another buildeth thereon."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:11-12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"How that by revelation he made known unto me the mystery; (as I wrote afore in few words, Whereby, when ye read, ye may understand my knowledge in the mystery of Christ) Which in other ages was not made known unto the sons of men, as it is now revealed unto his holy apostles and prophets by the Spirit."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 3:3-5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I speak to you Gentiles, inasmuch as I am the apostle of the Gentiles, I magnify mine office."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Whereof I am made a minister, according to the dispensation of God which is given to me for you, to fulfil the word of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 1:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For this cause I Paul, the prisoner of Jesus Christ for you Gentiles, If ye have heard of the dispensation of the grace of God which is given me to you-ward."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 3:1-2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Unto me, who am less than the least of all saints, is this grace given, that I should preach among the Gentiles the unsearchable riches of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 3:8 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Foundation: Jesus Christ */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Foundation: Jesus Christ</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "For other foundation can no man lay than that is laid, which is Jesus Christ."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 3:11 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The foundation Paul laid is Jesus Christ. Not Jesus plus something. Not Jesus and the law. Not Jesus and water baptism. 
              Just Jesus Christ. This foundation is laid by God, not by man. No one can lay a different foundation. All believers 
              stand on this same foundation—the finished work of Christ.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For other foundation can no man lay than that is laid, which is Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Therefore thus saith the Lord GOD, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 28:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Jesus saith unto them, Did ye never read in the scriptures, The stone which the builders rejected, the same is become the head of the corner: this is the Lord's doing, and it is marvellous in our eyes?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 21:42 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"To whom coming, as unto a living stone, disallowed indeed of men, but chosen of God, and precious, Ye also, as lively stones, are built up a spiritual house, an holy priesthood, to offer up spiritual sacrifices, acceptable to God by Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 2:4-5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 2:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"In whom all the building fitly framed together groweth unto an holy temple in the Lord: In whom ye also are builded together for an habitation of God through the Spirit."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 2:21-22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The stone which the builders refused is become the head stone of the corner."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 118:22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he shall be for a sanctuary; but for a stone of stumbling and for a rock of offence to both the houses of Israel, for a gin and for a snare to the inhabitants of Jerusalem."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 8:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And a stone of stumbling, and a rock of offence, even to them which stumble at the word, being disobedient: whereunto also they were appointed."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 2:8 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Foundation: The Grace Gospel */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Foundation: The Grace Gospel</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The foundation Paul laid is not just the person of Christ, but the message about Christ—the grace gospel. 
              This is the gospel of 1 Corinthians 15:1-4: Christ died for our sins, was buried, and rose again. This is the 
              foundation upon which all believers stand.
            </p>

            <div className="space-y-4">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mb-4">
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  "Moreover, brethren, I declare unto you the gospel which I preached unto you, which also ye have received, and wherein ye stand."
                </p>
                <p className="text-right text-gray-600">— 1 Corinthians 15:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I delivered unto you first of all that which I also received, how that Christ died for our sins according to the scriptures; And that he was buried, and that he rose again the third day according to the scriptures."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 15:3-4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:11-12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Now to him that is of power to stablish you according to my gospel, and the preaching of Jesus Christ, according to the revelation of the mystery, which was kept secret since the world began."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 16:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:16 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Another Buildeth Thereon */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Another Buildeth Thereon: Building Upon the Foundation</h3>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "I have laid the foundation, and another buildeth thereon. But let every man take heed how he buildeth thereupon."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 3:10 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Paul laid the foundation. Others build upon it. But each person must take heed—be careful—how they build. 
              You can build with valuable materials (gold, silver, precious stones) or worthless materials (wood, hay, stubble). 
              The foundation is secure, but how you build determines whether you receive rewards or suffer loss.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I have laid the foundation, and another buildeth thereon. But let every man take heed how he buildeth thereupon."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble; Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:12-13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any man's work abide which he hath built thereupon, he shall receive a reward. If any man's work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:14-15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we are labourers together with God: ye are God's husbandry, ye are God's building."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But let every man prove his own work, and then shall he have rejoicing in himself alone, and not in another."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 6:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"So then every one of us shall give account of himself to God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 14:12 (KJV)</p>
              </div>
            </div>
          </div>

          {/* According to the Grace of God */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">According to the Grace of God</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Paul emphasizes that his role as masterbuilder was "according to the grace of God which is given unto me." 
              This was not by his own wisdom, ability, or merit. It was by God's grace. This same grace is available to all 
              who believe and build upon the foundation.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But by the grace of God I am what I am: and his grace which was bestowed upon me was not in vain; but I laboured more abundantly than they all: yet not I, but the grace of God which was with me."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 15:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Unto me, who am less than the least of all saints, is this grace given, that I should preach among the Gentiles the unsearchable riches of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 3:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the grace of God that bringeth salvation hath appeared to all men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Titus 2:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 2:8-9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And of his fulness have all we received, and grace for grace."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 1:16 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Wise Masterbuilder: Wisdom from God */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Wise Masterbuilder: Wisdom from God</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Paul was a "wise" masterbuilder. This wisdom did not come from human learning or philosophy. It came from God, 
              through the revelation of the mystery. This is the wisdom that rightly divides the word of truth.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Howbeit we speak wisdom among them that are perfect: yet not the wisdom of this world, nor of the princes of this world, that come to nought: But we speak the wisdom of God in a mystery, even the hidden wisdom, which God ordained before the world unto our glory."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But God hath revealed them unto us by his Spirit: for the Spirit searcheth all things, yea, the deep things of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Now we have received, not the spirit of the world, but the spirit which is of God; that we might know the things that are freely given to us of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Which things also we speak, not in the words which man's wisdom teacheth, but which the Holy Ghost teacheth; comparing spiritual things with spiritual."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wisdom of this world is foolishness with God. For it is written, He taketh the wise in their own craftiness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— James 1:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— James 3:17 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Building the Spiritual House */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Building the Spiritual House</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The foundation Paul laid is the foundation for the spiritual house—the Body of Christ. All believers are being 
              built together into this house, with Christ as the chief cornerstone.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we are labourers together with God: ye are God's husbandry, ye are God's building."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone; In whom all the building fitly framed together groweth unto an holy temple in the Lord: In whom ye also are builded together for an habitation of God through the Spirit."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 2:20-22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"To whom coming, as unto a living stone, disallowed indeed of men, but chosen of God, and precious, Ye also, as lively stones, are built up a spiritual house, an holy priesthood, to offer up spiritual sacrifices, acceptable to God by Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 2:4-5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But Christ as a son over his own house; whose house are we, if we hold fast the confidence and the rejoicing of the hope firm unto the end."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hebrews 3:6 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But if I tarry long, that thou mayest know how thou oughtest to behave thyself in the house of God, which is the church of the living God, the pillar and ground of the truth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Timothy 3:15 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Take Heed How Ye Build */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Take Heed: How You Build Matters</h3>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "But let every man take heed how he buildeth thereupon."
              </p>
              <p className="text-right text-gray-600">— 1 Corinthians 3:10 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The foundation is secure. But how you build matters. You can build with valuable materials that abide, or worthless 
              materials that burn. Take heed—be careful, be wise, be intentional—how you build.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But let every man take heed how he buildeth thereupon."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"See then that ye walk circumspectly, not as fools, but as wise."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 5:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 15:58 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And let us not be weary in well doing: for in due season we shall reap, if we faint not."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 6:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we are his workmanship, created in Christ Jesus unto good works, which God hath before ordained that we should walk in them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 2:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"That ye might walk worthy of the Lord unto all pleasing, being fruitful in every good work, and increasing in the knowledge of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 1:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And whatsoever ye do, do it heartily, as to the Lord, and not unto men; Knowing that of the Lord ye shall receive the reward of the inheritance: for ye serve the Lord Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 3:23-24 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation, and another buildeth thereon. But let every man take heed how he buildeth thereupon."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For other foundation can no man lay than that is laid, which is Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Every man's work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man's work of what sort it is."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any man's work abide which he hath built thereupon, he shall receive a reward."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any man's work shall be burned, he shall suffer loss: but he himself shall be saved; yet so as by fire."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we are labourers together with God: ye are God's husbandry, ye are God's building."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But let every man prove his own work, and then shall he have rejoicing in himself alone, and not in another."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 6:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"So then every one of us shall give account of himself to God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 14:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 5:10 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding Paul as the wise masterbuilder and the foundation he laid transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>The Foundation is Secure:</strong> Your communication is built on the foundation of Jesus Christ and the grace gospel. This foundation cannot be shaken. You stand secure.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Build Wisely:</strong> Take heed how you build. Build with valuable materials—speak in the Spirit, for God's glory, with love. This is gold, silver, precious stones.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>According to Grace:</strong> Your ability to communicate effectively comes from God's grace, not your own ability. Rely on grace, not on self.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Wisdom from God:</strong> The wisdom to rightly divide and communicate clearly comes from God's Spirit, not human learning. Seek God's wisdom.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Building Together:</strong> You're not building alone. You're part of God's building, the Body of Christ. Build in a way that edifies the whole body.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding that Paul laid the foundation as the wise masterbuilder. The foundation is Jesus Christ 
              and the grace gospel. You stand on this secure foundation. Now build wisely upon it—with valuable materials, in the Spirit, 
              for God's glory, with love. This is how you build works that abide and receive rewards.
            </p>
          </div>
        </section>

        {/* The Existence of the Creator God */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              The Existence of the Creator God: Revealed in Creation (Romans 1:19-20)
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "Because that which may be known of God is manifest in them; for God hath shewed it unto them. For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."
            </p>
            <p className="text-right text-gray-600 text-lg">— Romans 1:19-20 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The existence of the Creator God is not a matter of faith alone—it is manifest, clearly seen, understood through creation itself. 
            God has shown Himself to all people through what He has made. His eternal power and Godhead are visible in creation. 
            Those who deny God's existence are without excuse. The fool says in his heart, "There is no God."
          </p>

          {/* God's Existence Manifest in Creation */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">God's Existence Manifest in Creation</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "Because that which may be known of God is manifest in them; for God hath shewed it unto them."
              </p>
              <p className="text-right text-gray-600">— Romans 1:19 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              God has not hidden Himself. What can be known about God is manifest—clearly visible, obvious, evident. 
              God has shown it to all people. This knowledge is not hidden in a book or revealed only to a select few. 
              It is manifest in creation itself, available to all who have eyes to see.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Because that which may be known of God is manifest in them; for God hath shewed it unto them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The heavens declare the glory of God; and the firmament sheweth his handywork."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 19:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Day unto day uttereth speech, and night unto night sheweth knowledge. There is no speech nor language, where their voice is not heard."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 19:2-3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Their line is gone out through all the earth, and their words to the end of the world. In them hath he set a tabernacle for the sun."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 19:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Lift up your eyes on high, and behold who hath created these things, that bringeth out their host by number: he calleth them all by names by the greatness of his might, for that he is strong in power; not one faileth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 40:26 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Clearly Seen and Understood */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Clearly Seen and Understood</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead."
              </p>
              <p className="text-right text-gray-600">— Romans 1:20 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The invisible things of God—His eternal power and Godhead—are clearly seen. They are understood by the things that are made. 
              Creation itself testifies to the Creator. The complexity, order, design, and beauty of creation point unmistakably to an 
              intelligent, powerful, eternal Creator.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For since the creation of the world his invisible things are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"When I consider thy heavens, the work of thy fingers, the moon and the stars, which thou hast ordained; What is man, that thou art mindful of him? and the son of man, that thou visitest him?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 8:3-4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 104:24 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 139:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For every house is builded by some man; but he that built all things is God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hebrews 3:4 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Fool Says There Is No God */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Fool Says There Is No God</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "The fool hath said in his heart, There is no God."
              </p>
              <p className="text-right text-gray-600">— Psalm 14:1, Psalm 53:1 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Bible is clear: those who say there is no God are fools. This is not a matter of opinion or debate. 
              It is a statement of fact. The evidence of God's existence is so clear, so manifest, so obvious, that 
              only a fool would deny it. They are without excuse.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The fool hath said in his heart, There is no God. They are corrupt, they have done abominable works, there is none that doeth good."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 14:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The fool hath said in his heart, There is no God. Corrupt are they, and have done abominable iniquity: there is none that doeth good."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 53:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Professing themselves to be wise, they became fools."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wisdom of this world is foolishness with God. For it is written, He taketh the wise in their own craftiness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let no man deceive himself. If any man among you seemeth to be wise in this world, let him become a fool, that he may be wise."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:18 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Without Excuse */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Without Excuse</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The evidence of God's existence is so clear that those who deny it are without excuse. God has made Himself known 
              through creation. His eternal power and Godhead are clearly seen. There is no valid excuse for unbelief.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Because that which may be known of God is manifest in them; for God hath shewed it unto them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The heavens declare the glory of God; and the firmament sheweth his handywork."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 19:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:18 (KJV)</p>
              </div>
            </div>
          </div>

          {/* God's Eternal Power and Godhead */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">God's Eternal Power and Godhead</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Creation reveals God's eternal power and Godhead. His power is seen in the vastness of the universe, the complexity 
              of life, the precision of natural laws. His Godhead—His divine nature—is seen in the order, design, and purpose evident 
              throughout creation.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"In the beginning God created the heaven and the earth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Genesis 1:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hebrews 11:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 1:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"All things were made by him; and without him was not any thing made that was made."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 1:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Revelation 4:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Hast thou not known? hast thou not heard, that the everlasting God, the LORD, the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 40:28 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Creator's Testimony in Creation */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Creator's Testimony in Creation</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every aspect of creation testifies to the Creator. From the vastness of space to the complexity of a single cell, 
              from the precision of natural laws to the beauty of a sunset, creation speaks clearly of its Creator.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The heavens declare the glory of God; and the firmament sheweth his handywork. Day unto day uttereth speech, and night unto night sheweth knowledge."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 19:1-2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"O LORD, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 104:24 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 139:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"When I consider thy heavens, the work of thy fingers, the moon and the stars, which thou hast ordained; What is man, that thou art mindful of him? and the son of man, that thou visitest him?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 8:3-4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Lift up your eyes on high, and behold who hath created these things, that bringeth out their host by number: he calleth them all by names by the greatness of his might, for that he is strong in power; not one faileth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 40:26 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For every house is builded by some man; but he that built all things is God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hebrews 3:4 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Fool's Heart Darkened */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Fool's Heart Darkened</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Those who deny God's existence do so not because of lack of evidence, but because their hearts are darkened. 
              They suppress the truth. They exchange the truth of God for a lie. They profess to be wise, but become fools.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Professing themselves to be wise, they became fools."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The fool hath said in his heart, There is no God. They are corrupt, they have done abominable works, there is none that doeth good."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 14:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The fool hath said in his heart, There is no God. Corrupt are they, and have done abominable iniquity: there is none that doeth good."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 53:1 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"In the beginning was the Word, and the Word was with God, and the Word was God. The same was in the beginning with God. All things were made by him; and without him was not any thing made that was made."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 1:1-3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For by him were all things created, that are in heaven, and that are in earth, visible and invisible, whether they be thrones, or dominions, or principalities, or powers: all things were created by him, and for him: And he is before all things, and by him all things consist."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 1:16-17 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Through faith we understand that the worlds were framed by the word of God, so that things which are seen were not made of things which do appear."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hebrews 11:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Revelation 4:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Hast thou not known? hast thou not heard, that the everlasting God, the LORD, the Creator of the ends of the earth, fainteth not, neither is weary? there is no searching of his understanding."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 40:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the LORD is the true God, he is the living God, and an everlasting king: at his wrath the earth shall tremble, and the nations shall not be able to abide his indignation."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Jeremiah 10:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But the LORD is the true God, he is the living God, and an everlasting king: at his wrath the earth shall tremble, and the nations shall not be able to abide his indignation."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Jeremiah 10:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The fool hath said in his heart, There is no God. They are corrupt, they have done abominable works, there is none that doeth good."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 14:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The fool hath said in his heart, There is no God. Corrupt are they, and have done abominable iniquity: there is none that doeth good."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 53:1 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the existence of the Creator God transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Confidence in Truth:</strong> God's existence is not a matter of opinion—it is manifest, clearly seen, understood through creation. Speak with confidence in this truth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Evidence Everywhere:</strong> Creation itself testifies to the Creator. Use the evidence of creation to point people to God.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>No Excuse:</strong> Those who deny God are without excuse. The evidence is clear. Speak boldly, knowing that unbelief is not due to lack of evidence, but to darkened hearts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>The Fool's Denial:</strong> The fool says in his heart, "There is no God." This is not wisdom—it is foolishness. Speak the truth clearly, even when it is rejected.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>God's Eternal Power:</strong> Creation reveals God's eternal power and Godhead. Speak of God's power and majesty as revealed in creation.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding that God's existence is manifest in creation. It is clearly seen, understood 
              by the things that are made. Those who deny God are without excuse. The fool says in his heart, "There is no God." 
              But creation itself testifies to the Creator. Speak this truth with confidence and clarity.
            </p>
          </div>
        </section>

        {/* Worshipping the Creature More Than the Creator */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              The Folly of Worshipping the Creature More Than the Creator (Romans 1:23, 25)
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8 rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "And changed the glory of the uncorruptible God into an image made like to corruptible man, and to birds, and fourfooted beasts, and creeping things."
            </p>
            <p className="text-right text-gray-600 text-lg mb-4">— Romans 1:23 (KJV)</p>
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen."
            </p>
            <p className="text-right text-gray-600 text-lg">— Romans 1:25 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The ultimate folly of fallen humanity is to worship and serve the creature—the created thing—more than the Creator. 
            This is the great exchange: trading the truth of God for a lie, the glory of the incorruptible God for images of 
            corruptible man and beasts. This is the height of human foolishness and the root of all idolatry.
          </p>

          {/* Changed the Glory of God */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Changed the Glory of the Incorruptible God</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "And changed the glory of the uncorruptible God into an image made like to corruptible man, and to birds, and fourfooted beasts, and creeping things."
              </p>
              <p className="text-right text-gray-600">— Romans 1:23 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Humanity exchanged the glory of the incorruptible, eternal, infinite God for images of corruptible, temporal, 
              finite creatures. They traded the Creator for the created. This is the great exchange—the ultimate folly.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And changed the glory of the uncorruptible God into an image made like to corruptible man, and to birds, and fourfooted beasts, and creeping things."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:23 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Forasmuch then as we are the offspring of God, we ought not to think that the Godhead is like unto gold, or silver, or stone, graven by art and man's device."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 17:29 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Exodus 20:4-5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Ye shall make you no idols nor graven image, neither rear you up a standing image, neither shall ye set up any image of stone in your land, to bow down unto it: for I am the LORD your God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Leviticus 26:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Their idols are silver and gold, the work of men's hands. They have mouths, but they speak not: eyes have they, but they see not: They have ears, but they hear not: noses have they, but they smell not: They have hands, but they handle not: feet have they, but they walk not: neither speak they through their throat."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 115:4-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"They that make them are like unto them; so is every one that trusteth in them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 115:8 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Worshipped and Served the Creature */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Worshipped and Served the Creature More Than the Creator</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen."
              </p>
              <p className="text-right text-gray-600">— Romans 1:25 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The ultimate folly: worshipping and serving the creature—the created thing—more than the Creator. This is idolatry 
              in its purest form. It is giving to the created what belongs only to the Creator. It is the great exchange—truth for a lie.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For all the gods of the nations are idols: but the LORD made the heavens."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 96:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Confounded be all they that serve graven images, that boast themselves of idols: worship him, all ye gods."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 97:7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For they themselves shew of us what manner of entering in we had unto you, and how ye turned to God from idols to serve the living and true God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Thessalonians 1:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Little children, keep yourselves from idols. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 John 5:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Wherefore, my dearly beloved, flee from idolatry."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 10:14 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Changed the Truth of God into a Lie */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Changed the Truth of God into a Lie</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The exchange is clear: the truth of God for a lie. The glory of the incorruptible God for images of corruptible creatures. 
              This is not just a mistake—it is a deliberate exchange, a willful rejection of truth for falsehood.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And changed the glory of the uncorruptible God into an image made like to corruptible man, and to birds, and fourfooted beasts, and creeping things."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:23 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:18 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Creator is Blessed Forever */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Creator is Blessed Forever</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Creator—not the creature—is blessed forever. He alone is worthy of worship. He alone is eternal, incorruptible, 
              infinite. The creature is temporal, corruptible, finite. To worship the creature is to worship that which will perish. 
              To worship the Creator is to worship Him who is blessed forever.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Blessed be the LORD God of Israel from everlasting to everlasting: and let all the people say, Amen. Praise ye the LORD."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 106:48 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Blessed be the LORD God, the God of Israel, who only doeth wondrous things. And blessed be his glorious name for ever: and let the whole earth be filled with his glory; Amen, and Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 72:18-19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Revelation 4:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Revelation 1:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For of him, and through him, and to him, are all things: to whom be glory for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:36 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Modern Forms of Creature Worship */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Modern Forms of Creature Worship</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Creature worship is not limited to ancient idols of wood and stone. Modern forms include worshipping money, success, 
              self, science, nature, or any created thing more than the Creator. Anything that takes the place of God in our hearts 
              is idolatry—worshipping the creature more than the Creator.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the love of money is the root of all evil: which while some coveted after, they have erred from the faith, and pierced themselves through with many sorrows."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Timothy 6:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 6:24 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Mortify therefore your members which are upon the earth; fornication, uncleanness, inordinate affection, evil concupiscence, and covetousness, which is idolatry."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 3:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For men shall be lovers of their own selves, covetous, boasters, proud, blasphemers, disobedient to parents, unthankful, unholy."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 3:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Little children, keep yourselves from idols. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 John 5:21 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Folly of Idolatry */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Folly of Idolatry</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Idolatry is the ultimate folly. It is worshipping that which is created instead of the Creator. It is giving to 
              the temporal what belongs to the eternal. It is serving the finite instead of the infinite. It is the great exchange—truth for a lie.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And changed the glory of the uncorruptible God into an image made like to corruptible man, and to birds, and fourfooted beasts, and creeping things."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:23 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Who changed the truth of God into a lie, and worshipped and served the creature more than the Creator, who is blessed for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Their idols are silver and gold, the work of men's hands. They have mouths, but they speak not: eyes have they, but they see not: They have ears, but they hear not: noses have they, but they smell not: They have hands, but they handle not: feet have they, but they walk not: neither speak they through their throat."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 115:4-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"They that make them are like unto them; so is every one that trusteth in them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 115:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For all the gods of the nations are idols: but the LORD made the heavens."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 96:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Wherefore, my dearly beloved, flee from idolatry."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 10:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Little children, keep yourselves from idols. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 John 5:21 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Thou shalt have no other gods before me. Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: Thou shalt not bow down thyself to them, nor serve them: for I the LORD thy God am a jealous God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Exodus 20:3-5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Ye shall make you no idols nor graven image, neither rear you up a standing image, neither shall ye set up any image of stone in your land, to bow down unto it: for I am the LORD your God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Leviticus 26:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Forasmuch then as we are the offspring of God, we ought not to think that the Godhead is like unto gold, or silver, or stone, graven by art and man's device."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 17:29 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For they themselves shew of us what manner of entering in we had unto you, and how ye turned to God from idols to serve the living and true God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Thessalonians 1:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Confounded be all they that serve graven images, that boast themselves of idols: worship him, all ye gods."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Psalm 97:7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For of him, and through him, and to him, are all things: to whom be glory for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:36 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Revelation 4:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Revelation 1:8 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the folly of worshipping the creature more than the Creator transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Worship the Creator:</strong> In all communication, point people to the Creator, not the creature. The Creator alone is worthy of worship and praise.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Expose the Folly:</strong> Clearly show the foolishness of worshipping created things—money, success, self, nature—instead of the Creator.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>The Great Exchange:</strong> Explain how humanity exchanged the truth of God for a lie, the glory of the incorruptible God for images of corruptible creatures.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Modern Idolatry:</strong> Help people recognize modern forms of idolatry—anything that takes God's place in our hearts is worshipping the creature.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>The Creator is Blessed Forever:</strong> Emphasize that the Creator—not the creature—is blessed forever. He alone is eternal, incorruptible, infinite.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding the ultimate folly: worshipping and serving the creature more than the Creator. 
              This is the great exchange—the truth of God for a lie, the glory of the incorruptible God for images of corruptible creatures. 
              The Creator is blessed forever. He alone is worthy of worship. Speak this truth clearly, exposing the folly of idolatry 
              and pointing people to the one true Creator God.
            </p>
          </div>
        </section>

        {/* Traditions of Men vs. Word of God */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Vain Worship: Traditions of Men vs. Word of God (Matthew 15:3, 9)
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8 rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition?"
            </p>
            <p className="text-right text-gray-600 text-lg mb-4">— Matthew 15:3 (KJV)</p>
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "But in vain they do worship me, teaching for doctrines the commandments of men."
            </p>
            <p className="text-right text-gray-600 text-lg">— Matthew 15:9 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Jesus exposed the ultimate religious folly: putting the traditions of men—the commandments of elders—above the Word of God. 
            This is vain worship. It is teaching human traditions as if they were God's doctrines. It is transgressing God's commandments 
            to keep human traditions. This is the height of religious hypocrisy and the root of all man-made religion.
          </p>

          {/* Transgressing God's Commandment by Tradition */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Transgressing God's Commandment by Tradition</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition?"
              </p>
              <p className="text-right text-gray-600">— Matthew 15:3 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The religious leaders of Jesus' day were transgressing—violating, breaking—God's commandments in order to keep their 
              own traditions. They elevated human traditions above divine commands. They made void the Word of God by their traditions.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For laying aside the commandment of God, ye hold the tradition of men, as the washing of pots and cups: and many other such like things ye do."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he said unto them, Full well ye reject the commandment of God, that ye may keep your own tradition."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Making the word of God of none effect through your tradition, which ye have delivered: and many such like things do ye."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then came to Jesus scribes and Pharisees, which were of Jerusalem, saying, Why do thy disciples transgress the tradition of the elders? for they wash not their hands when they eat bread."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:1-2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition? For God commanded, saying, Honour thy father and mother: and, He that curseth father or mother, let him die the death."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:3-4 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Vain Worship: Teaching Commandments of Men */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Vain Worship: Teaching Commandments of Men</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "But in vain they do worship me, teaching for doctrines the commandments of men."
              </p>
              <p className="text-right text-gray-600">— Matthew 15:9 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When human traditions are taught as if they were God's doctrines, worship becomes vain—empty, useless, worthless. 
              It is not true worship. It is religious performance. It is honoring God with the lips while the heart is far from Him.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But in vain they do worship me, teaching for doctrines the commandments of men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Wherefore if ye be dead with Christ from the rudiments of the world, why, as though living in the world, are ye subject to ordinances, (Touch not; taste not; handle not; Which all are to perish with the using;) after the commandments and doctrines of men?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:20-22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Forasmuch as ye know that ye were not redeemed with corruptible things, as silver and gold, from your vain conversation received by tradition from your fathers."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Peter 1:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the time will come when they will not endure sound doctrine; but after their own lusts shall they heap to themselves teachers, having itching ears; And they shall turn away their ears from the truth, and shall be turned unto fables."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 4:3-4 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Making the Word of God of None Effect */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Making the Word of God of None Effect</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Human traditions make void—nullify, cancel—the Word of God. They set aside God's commandments to keep human rules. 
              They reject God's Word to maintain man-made religion. This is the ultimate religious folly.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Making the word of God of none effect through your tradition, which ye have delivered: and many such like things do ye."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For laying aside the commandment of God, ye hold the tradition of men, as the washing of pots and cups: and many other such like things ye do."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he said unto them, Full well ye reject the commandment of God, that ye may keep your own tradition."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 3:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the word of God is quick, and powerful, and sharper than any twoedged sword, piercing even to the dividing asunder of soul and spirit, and of the joints and marrow, and is a discerner of the thoughts and intents of the heart."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hebrews 4:12 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Heart Far from God */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Heart Far from God</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Vain worship is external—honoring God with the lips while the heart is far from Him. It is religious performance 
              without true relationship. It is following traditions while ignoring the heart condition.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But in vain they do worship me, teaching for doctrines the commandments of men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the LORD seeth not as man seeth; for man looketh on the outward appearance, but the LORD looketh on the heart."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Samuel 16:7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Keep thy heart with all diligence; for out of it are the issues of life."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Proverbs 4:23 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But the hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth: for the Father seeketh such to worship him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 4:23 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"God is a Spirit: and they that worship him must worship him in spirit and in truth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 4:24 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Traditions of the Elders */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Traditions of the Elders</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The traditions of the elders—the commandments of men passed down through generations—became more important than 
              the Word of God. These human rules replaced divine commands. This is the essence of man-made religion.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then came to Jesus scribes and Pharisees, which were of Jerusalem, saying, Why do thy disciples transgress the tradition of the elders? for they wash not their hands when they eat bread."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:1-2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For laying aside the commandment of God, ye hold the tradition of men, as the washing of pots and cups: and many other such like things ye do."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he said unto them, Full well ye reject the commandment of God, that ye may keep your own tradition."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Wherefore if ye be dead with Christ from the rudiments of the world, why, as though living in the world, are ye subject to ordinances, (Touch not; taste not; handle not; Which all are to perish with the using;) after the commandments and doctrines of men?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:20-22 (KJV)</p>
              </div>
            </div>
          </div>

          {/* True Worship vs. Vain Worship */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">True Worship vs. Vain Worship</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Vain Worship */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-l-4 border-red-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Vain Worship</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"But in vain they do worship me, teaching for doctrines the commandments of men."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 15:9 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 15:8 (KJV)</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Characteristics:</strong> External, religious performance, following traditions, heart far from God, 
                    teaching commandments of men as doctrines.
                  </p>
                </div>
              </div>

              {/* True Worship */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border-l-4 border-green-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">True Worship</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"But the hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth: for the Father seeketh such to worship him."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— John 4:23 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"God is a Spirit: and they that worship him must worship him in spirit and in truth."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— John 4:24 (KJV)</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Characteristics:</strong> In spirit and truth, from the heart, following God's Word, 
                    not man's traditions, true relationship with God.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But he answered and said unto them, Why do ye also transgress the commandment of God by your tradition?"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But in vain they do worship me, teaching for doctrines the commandments of men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For laying aside the commandment of God, ye hold the tradition of men, as the washing of pots and cups: and many other such like things ye do."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he said unto them, Full well ye reject the commandment of God, that ye may keep your own tradition."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Making the word of God of none effect through your tradition, which ye have delivered: and many such like things do ye."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Mark 7:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 15:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But the hour cometh, and now is, when the true worshippers shall worship the Father in spirit and in truth: for the Father seeketh such to worship him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 4:23 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"God is a Spirit: and they that worship him must worship him in spirit and in truth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 4:24 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 3:16 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the folly of putting traditions of men above the Word of God transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Word of God First:</strong> Always prioritize God's Word over human traditions. The Word of God is the final authority, not the traditions of men.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Expose Vain Worship:</strong> Clearly show the folly of teaching human traditions as if they were God's doctrines. This is vain worship.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Heart Condition:</strong> Emphasize that God looks on the heart, not just external religious performance. True worship is in spirit and truth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Making Void God's Word:</strong> Show how human traditions make void the Word of God. They set aside God's commands to keep human rules.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>True Worship:</strong> Point people to true worship—in spirit and truth, from the heart, following God's Word, not man's traditions.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding the ultimate religious folly: putting the traditions of men—the commandments 
              of elders—above the Word of God. This is vain worship. It is transgressing God's commandments to keep human traditions. 
              It is teaching human rules as if they were God's doctrines. True worship is in spirit and truth, from the heart, 
              following God's Word, not man's traditions. Speak this truth clearly, exposing the folly of man-made religion and 
              pointing people to true worship of the one true God.
            </p>
          </div>
        </section>

        {/* Knowledge of God and Renewing the Mind */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Knowledge of God and Renewing the Mind: The Importance of Right Thinking (Romans 1:28, 12:2)
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient."
            </p>
            <p className="text-right text-gray-600 text-lg mb-4">— Romans 1:28 (KJV)</p>
            <p className="text-2xl font-semibold text-gray-900 mb-4">
              "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."
            </p>
            <p className="text-right text-gray-600 text-lg">— Romans 12:2 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The knowledge of God is not optional—it is essential. When people reject God in their knowledge, they are given over to 
            a reprobate mind. But when we renew our minds according to God's Word, we can prove—discern, understand, know—what is that 
            good, and acceptable, and perfect will of God. Right thinking leads to right living. Wrong thinking leads to destruction.
          </p>

          {/* Not Retaining God in Knowledge */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Not Retaining God in Knowledge</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient."
              </p>
              <p className="text-right text-gray-600">— Romans 1:28 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The ultimate rejection: not liking to retain God in knowledge. This is not ignorance—it is willful rejection. 
              They knew God but did not want to keep that knowledge. The result: a reprobate mind—a mind that cannot approve, 
              a mind given over to what is not convenient, not fitting, not proper.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Because that which may be known of God is manifest in them; for God hath shewed it unto them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the invisible things of him from the creation of the world are clearly seen, being understood by the things that are made, even his eternal power and Godhead; so that they are without excuse."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:20 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Reprobate Mind */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Reprobate Mind: The Consequence of Rejecting God</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A reprobate mind is a mind that cannot approve, cannot discern, cannot judge rightly. It is a mind given over to 
              what is not convenient—not fitting, not proper, not right. This is the consequence of rejecting God in knowledge.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Because that, when they knew God, they glorified him not as God, neither were thankful; but became vain in their imaginations, and their foolish heart was darkened."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Professing themselves to be wise, they became fools."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wisdom of this world is foolishness with God. For it is written, He taketh the wise in their own craftiness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let no man deceive himself. If any man among you seemeth to be wise in this world, let him become a fool, that he may be wise."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:18 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Renewing the Mind */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Renewing the Mind: The Solution</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."
              </p>
              <p className="text-right text-gray-600">— Romans 12:2 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The solution is not to conform to this world, but to be transformed by the renewing of the mind. When the mind is renewed 
              according to God's Word, we can prove—discern, understand, know—what is that good, and acceptable, and perfect will of God. 
              Right thinking leads to right living.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 12:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let this mind be in you, which was also in Christ Jesus."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 2:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 10:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 4:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Set your affection on things above, not on things on the earth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 3:2 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Proving the Will of God */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Proving the Good, Acceptable, and Perfect Will of God</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When the mind is renewed, we can prove—discern, understand, know—what is that good, and acceptable, and perfect will of God. 
              We can distinguish between what is good and what is evil, what is acceptable and what is not, what is perfect and what is incomplete.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 12:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For every one that useth milk is unskilful in the word of righteousness: for he is a babe. But strong meat belongeth to them that are of full age, even those who by reason of use have their senses exercised to discern both good and evil."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hebrews 5:13-14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"That ye may approve things that are excellent; that ye may be sincere and without offence till the day of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 1:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Wherefore be ye not unwise, but understanding what the will of the Lord is."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 5:17 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For this is the will of God, even your sanctification, that ye should abstain from fornication."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Thessalonians 4:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"In every thing give thanks: for this is the will of God in Christ Jesus concerning you."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Thessalonians 5:18 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Mind of Christ */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Mind of Christ</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The renewed mind is the mind of Christ. It thinks like Christ thinks. It sees things from God's perspective. 
              It understands the deep things of God. This is the goal of renewing the mind.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let this mind be in you, which was also in Christ Jesus."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 2:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But we have the mind of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 10:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 4:8 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Knowledge of God */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Importance of Knowledge of God</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Knowledge of God is not optional—it is essential. It is the foundation of right thinking. Without knowledge of God, 
              the mind becomes reprobate. With knowledge of God, the mind is renewed and can discern God's will.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that thou shalt be no priest to me: seeing thou hast forgotten the law of thy God, I will also forget thy children."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hosea 4:6 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Grace and peace be multiplied unto you through the knowledge of God, and of Jesus our Lord."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Peter 1:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Peter 1:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Peter 3:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"That the God of our Lord Jesus Christ, the Father of glory, may give unto you the spirit of wisdom and revelation in the knowledge of him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 1:17 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Right Thinking Leads to Right Living */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Right Thinking Leads to Right Living</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Right thinking leads to right living. Wrong thinking leads to wrong living. The mind determines the direction of life. 
              When the mind is renewed according to God's Word, life is transformed.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 12:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Keep thy heart with all diligence; for out of it are the issues of life."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Proverbs 4:23 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For as he thinketh in his heart, so is he: Eat and drink, saith he to thee; but his heart is not with thee."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Proverbs 23:7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 10:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 4:8 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And even as they did not like to retain God in their knowledge, God gave them over to a reprobate mind, to do those things which are not convenient."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 12:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let this mind be in you, which was also in Christ Jesus."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 2:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Casting down imaginations, and every high thing that exalteth itself against the knowledge of God, and bringing into captivity every thought to the obedience of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 10:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Philippians 4:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Set your affection on things above, not on things on the earth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 3:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that thou shalt be no priest to me: seeing thou hast forgotten the law of thy God, I will also forget thy children."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Hosea 4:6 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Grace and peace be multiplied unto you through the knowledge of God, and of Jesus our Lord."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Peter 1:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Peter 3:18 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the importance of knowledge of God and renewing the mind transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Knowledge of God First:</strong> Always prioritize knowledge of God. Without it, the mind becomes reprobate. With it, the mind is renewed.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Renew the Mind:</strong> Encourage people to renew their minds according to God's Word. This is the key to proving God's will.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Right Thinking:</strong> Emphasize that right thinking leads to right living. The mind determines the direction of life.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>The Mind of Christ:</strong> Point people to the mind of Christ—thinking like God thinks, seeing from God's perspective.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Prove God's Will:</strong> Show that with a renewed mind, we can prove—discern, understand, know—what is that good, and acceptable, and perfect will of God.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding the critical importance of knowledge of God and renewing the mind. When people 
              reject God in their knowledge, they are given over to a reprobate mind. But when we renew our minds according to God's Word, 
              we can prove what is that good, and acceptable, and perfect will of God. Right thinking leads to right living. The mind 
              of Christ enables us to think like God thinks and live according to His will. Speak this truth clearly, emphasizing the 
              importance of knowledge of God and the renewing of the mind.
            </p>
          </div>
        </section>

        {/* Speaking Truth: Religion, Politics, and Homosexuality */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Speaking Truth: The Believer's Position on Religion, Politics, and Homosexuality
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Many churches and religious leaders today instruct believers: "Don't talk about religion, politics, or homosexuality in church." 
              But what does the Word of God say? What position should believers take? The Bible is clear: we must speak the truth in love, 
              regardless of what the world or religious leaders say.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The world says: "Be quiet. Don't offend. Don't speak about controversial topics." But God's Word says: "Speak the truth. 
            Preach the word. Be instant in season, out of season. Reprove, rebuke, exhort with all longsuffering and doctrine." 
            Believers must choose: obey God or obey man. The choice is clear.
          </p>

          {/* Preach the Word */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Preach the Word: In Season and Out of Season</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine."
              </p>
              <p className="text-right text-gray-600">— 2 Timothy 4:2 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              God's command is clear: preach the word. Not when it's convenient. Not when it's popular. Not when it's safe. 
              But in season and out of season—always. This includes reproving, rebuking, and exhorting. This is not optional. 
              It is commanded.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 4:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the time will come when they will not endure sound doctrine; but after their own lusts shall they heap to themselves teachers, having itching ears; And they shall turn away their ears from the truth, and shall be turned unto fables."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 4:3-4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But watch thou in all things, endure afflictions, do the work of an evangelist, make full proof of thy ministry."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 4:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But if our gospel be hid, it is hid to them that are lost: In whom the god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 4:3-4 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Jesus and the Apostles Spoke About Politics */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Jesus and the Apostles Spoke About Politics</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jesus and the apostles did not avoid political topics. They spoke directly to political leaders, addressed political issues, 
              and declared God's truth regardless of political consequences. They were not silent. They spoke truth to power.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then saith he unto them, Render therefore unto Caesar the things which are Caesar's; and unto God the things that are God's."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 22:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And Jesus stood before the governor: and the governor asked him, saying, Art thou the King of the Jews? And Jesus said unto him, Thou sayest."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 27:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Pilate therefore said unto him, Art thou a king then? Jesus answered, Thou sayest that I am a king. To this end was I born, and for this cause came I into the world, that I should bear witness unto the truth. Every one that is of the truth heareth my voice."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 18:37 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then Peter and the other apostles answered and said, We ought to obey God rather than men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 5:29 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But Peter and John answered and said unto them, Whether it be right in the sight of God to hearken unto you more than unto God, judge ye."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 4:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we cannot but speak the things which we have seen and heard."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 4:20 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Bible Speaks Clearly About Homosexuality */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Bible Speaks Clearly About Homosexuality</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Bible is not silent about homosexuality. It speaks clearly, directly, and repeatedly. It calls it sin, abomination, 
              and against nature. To be silent about this is to be unfaithful to God's Word.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Thou shalt not lie with mankind, as with womankind: it is abomination."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Leviticus 18:22 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If a man also lie with mankind, as he lieth with a woman, both of them have committed an abomination: they shall surely be put to death; their blood shall be upon them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Leviticus 20:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For this cause God gave them up unto vile affections: for even their women did change the natural use into that which is against nature: And likewise also the men, leaving the natural use of the woman, burned in their lust one toward another; men with men working that which is unseemly, and receiving in themselves that recompence of their error which was meet."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:26-27 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Know ye not that the unrighteous shall not inherit the kingdom of God? Be not deceived: neither fornicators, nor idolaters, nor adulterers, nor effeminate, nor abusers of themselves with mankind."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 6:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Nor thieves, nor covetous, nor drunkards, nor revilers, nor extortioners, shall inherit the kingdom of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 6:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And such were some of you: but ye are washed, but ye are sanctified, but ye are justified in the name of the Lord Jesus, and by the Spirit of our God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 6:11 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Obey God Rather Than Men */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Obey God Rather Than Men</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "Then Peter and the other apostles answered and said, We ought to obey God rather than men."
              </p>
              <p className="text-right text-gray-600">— Acts 5:29 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              When religious leaders or the world tells us to be silent about truth, we must choose: obey God or obey men. 
              The apostles chose to obey God. They spoke truth regardless of consequences. So must we.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then Peter and the other apostles answered and said, We ought to obey God rather than men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 5:29 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But Peter and John answered and said unto them, Whether it be right in the sight of God to hearken unto you more than unto God, judge ye."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 4:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we cannot but speak the things which we have seen and heard."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 4:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And fear not them which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 10:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Whosoever therefore shall confess me before men, him will I confess also before my Father which is in heaven. But whosoever shall deny me before men, him will I also deny before my Father which is in heaven."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 10:32-33 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Speak the Truth in Love */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Speak the Truth in Love</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We must speak truth, but we must speak it in love. Not in hate. Not in anger. Not in self-righteousness. 
              But in love, with compassion, with the goal of bringing people to Christ.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But speaking the truth in love, may grow up into him in all things, which is the head, even Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 4:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 3:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And of some have compassion, making a difference: And others save with fear, pulling them out of the fire; hating even the garment spotted by the flesh."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Jude 1:22-23 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Brethren, if any of you do err from the truth, and one convert him; Let him know, that he which converteth the sinner from the error of his way shall save a soul from death, and shall hide a multitude of sins."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— James 5:19-20 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Watchman's Responsibility */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Watchman's Responsibility</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              God has made us watchmen. We have a responsibility to warn. If we are silent, their blood is on our hands. 
              We must speak, regardless of what the world says.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Son of man, I have made thee a watchman unto the house of Israel: therefore hear the word at my mouth, and give them warning from me. When I say unto the wicked, Thou shalt surely die; and thou givest him not warning, nor speakest to warn the wicked from his wicked way, to save his life; the same wicked man shall die in his iniquity; but his blood will I require at thine hand."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ezekiel 3:17-18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Yet if thou warn the wicked, and he turn not from his wickedness, nor from his wicked way, he shall die in his iniquity; but thou hast delivered thy soul."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ezekiel 3:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Again, when a righteous man doth turn from his righteousness, and commit iniquity, and I lay a stumblingblock before him, he shall die: because thou hast not given him warning, he shall die in his sin, and his righteousness which he hath done shall not be remembered; but his blood will I require at thine hand."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ezekiel 3:20 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Salt and Light */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Salt and Light: Not Hidden</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are called to be salt and light. Salt that loses its savor is good for nothing. Light hidden under a bushel 
              is useless. We must speak truth, shine light, preserve truth—not hide it.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 5:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Ye are the light of the world. A city that is set on an hill cannot be hid. Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 5:14-15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 5:16 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 4:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then Peter and the other apostles answered and said, We ought to obey God rather than men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 5:29 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For we cannot but speak the things which we have seen and heard."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Acts 4:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But speaking the truth in love, may grow up into him in all things, which is the head, even Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 4:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For this cause God gave them up unto vile affections: for even their women did change the natural use into that which is against nature: And likewise also the men, leaving the natural use of the woman, burned in their lust one toward another; men with men working that which is unseemly, and receiving in themselves that recompence of their error which was meet."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 1:26-27 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Know ye not that the unrighteous shall not inherit the kingdom of God? Be not deceived: neither fornicators, nor idolaters, nor adulterers, nor effeminate, nor abusers of themselves with mankind."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 6:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Ye are the salt of the earth: but if the salt have lost his savour, wherewith shall it be salted? it is thenceforth good for nothing, but to be cast out, and to be trodden under foot of men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 5:13 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Ye are the light of the world. A city that is set on an hill cannot be hid."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 5:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 5:16 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the believer's position on speaking truth transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Obey God, Not Men:</strong> When religious leaders or the world tell us to be silent, we must choose to obey God. We ought to obey God rather than men.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Preach the Word:</strong> We must preach the word in season and out of season—always. This includes reproving, rebuking, and exhorting.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Speak Truth in Love:</strong> We must speak truth, but in love. Not in hate or anger, but with compassion, with the goal of bringing people to Christ.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Be Salt and Light:</strong> We are called to be salt and light. We cannot hide truth. We must speak it, shine it, preserve it.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>The Watchman's Responsibility:</strong> We have a responsibility to warn. If we are silent, their blood is on our hands. We must speak.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding that we must speak truth, regardless of what the world or religious leaders say. 
              The world says: "Be quiet. Don't offend. Don't speak about controversial topics." But God's Word says: "Preach the word. 
              Be instant in season, out of season. Reprove, rebuke, exhort." Jesus and the apostles spoke about politics, religion, 
              and sin. They did not remain silent. Neither should we. We must obey God rather than men. We must speak truth in love. 
              We must be salt and light. We must fulfill our responsibility as watchmen. This is the believer's position. This is 
              how we communicate truth with authority and love.
            </p>
          </div>
        </section>

        {/* Wheat and Tares: The Good Seed and the Chaff */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Wheat and Tares: The Good Seed and the Chaff
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              The Bible uses the imagery of wheat and tares, good seed and chaff, to distinguish between true believers and false believers, 
              between the genuine and the counterfeit. Understanding this distinction is essential for rightly dividing the word of truth.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            In the visible church, there are both wheat (true believers) and tares (false believers). They grow together until the harvest. 
            But at the end, they will be separated. The wheat will be gathered into the barn; the tares will be burned. The chaff will be 
            separated from the wheat and burned with unquenchable fire. This is the final separation.
          </p>

          {/* The Parable of Wheat and Tares */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Parable of Wheat and Tares</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "Another parable put he forth unto them, saying, The kingdom of heaven is likened unto a man which sowed good seed in his field: 
                But while men slept, his enemy came and sowed tares among the wheat, and went his way. But when the blade was sprung up, and brought 
                forth fruit, then appeared the tares also. So the servants of the householder came and said unto him, Sir, didst not thou sow good 
                seed in thy field? from whence then hath it tares? He said unto them, An enemy hath done this. The servants said unto him, Wilt thou 
                then that we go and gather them up? But he said, Nay; lest while ye gather up the tares, ye root up also the wheat with them. Let both 
                grow together until the harvest: and in the time of harvest I will say to the reapers, Gather ye together first the tares, and bind them 
                in bundles to burn them: but gather the wheat into my barn."
              </p>
              <p className="text-right text-gray-600">— Matthew 13:24-30 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jesus told this parable to illustrate that in the kingdom of heaven (the visible church), there are both good seed (true believers) 
              and tares (false believers). They grow together until the harvest (the end of the age). At that time, they will be separated. 
              The tares will be burned; the wheat will be gathered into the barn.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Another parable put he forth unto them, saying, The kingdom of heaven is likened unto a man which sowed good seed in his field."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:24 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But while men slept, his enemy came and sowed tares among the wheat, and went his way."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let both grow together until the harvest: and in the time of harvest I will say to the reapers, Gather ye together first the tares, and bind them in bundles to burn them: but gather the wheat into my barn."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:30 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Interpretation of the Parable */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Interpretation of the Parable</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jesus explained the parable to His disciples. The good seed represents the children of the kingdom (true believers). 
              The tares represent the children of the wicked one (false believers). They grow together until the end of the world, 
              when they will be separated.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"He answered and said unto them, He that soweth the good seed is the Son of man; The field is the world; the good seed are the children of the kingdom; but the tares are the children of the wicked one; The enemy that sowed them is the devil; the harvest is the end of the world; and the reapers are the angels."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:37-39 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As therefore the tares are gathered and burned in the fire; so shall it be in the end of this world. The Son of man shall send forth his angels, and they shall gather out of his kingdom all things that offend, and them which do iniquity; And shall cast them into a furnace of fire: there shall be wailing and gnashing of teeth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:40-42 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then shall the righteous shine forth as the sun in the kingdom of their Father. Who hath ears to hear, let him hear."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:43 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Chaff and the Wheat */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Chaff and the Wheat</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Bible also uses the imagery of chaff and wheat. The chaff (the worthless husk) must be separated from the wheat (the valuable grain). 
              The chaff will be burned with unquenchable fire; the wheat will be gathered into the barn.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Whose fan is in his hand, and he will throughly purge his floor, and gather his wheat into the garner; but he will burn up the chaff with unquenchable fire."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 3:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Whose fan is in his hand, and he will throughly purge his floor, and will gather the wheat into his garner; but the chaff he will burn with fire unquenchable."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Luke 3:17 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The prophet that hath a dream, let him tell a dream; and he that hath my word, let him speak my word faithfully. What is the chaff to the wheat? saith the LORD."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Jeremiah 23:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For, lo, I will command, and I will sift the house of Israel among all nations, like as corn is sifted in a sieve, yet shall not the least grain fall upon the earth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Amos 9:9 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Growing Together Until the Harvest */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Growing Together Until the Harvest</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The wheat and tares grow together until the harvest. They cannot be separated prematurely without uprooting the wheat. 
              This is why we must be patient and wait for the harvest—the end of the age—when God will separate them.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let both grow together until the harvest: and in the time of harvest I will say to the reapers, Gather ye together first the tares, and bind them in bundles to burn them: but gather the wheat into my barn."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:30 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The servants said unto him, Wilt thou then that we go and gather them up? But he said, Nay; lest while ye gather up the tares, ye root up also the wheat with them."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:28-29 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The harvest is the end of the world; and the reapers are the angels."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:39 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Final Separation */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Final Separation</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At the end of the age, there will be a final separation. The tares will be gathered and burned. The chaff will be separated 
              and burned with unquenchable fire. The wheat will be gathered into the barn. The righteous will shine forth as the sun.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As therefore the tares are gathered and burned in the fire; so shall it be in the end of this world. The Son of man shall send forth his angels, and they shall gather out of his kingdom all things that offend, and them which do iniquity; And shall cast them into a furnace of fire: there shall be wailing and gnashing of teeth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:40-42 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then shall the righteous shine forth as the sun in the kingdom of their Father. Who hath ears to hear, let him hear."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:43 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Whose fan is in his hand, and he will throughly purge his floor, and gather his wheat into the garner; but he will burn up the chaff with unquenchable fire."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 3:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And before him shall be gathered all nations: and he shall separate them one from another, as a shepherd divideth his sheep from the goats: And he shall set the sheep on his right hand, but the goats on the left."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 25:32-33 (KJV)</p>
              </div>
            </div>
          </div>

          {/* True Believers vs. False Believers */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">True Believers vs. False Believers</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Wheat - True Believers */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Wheat: True Believers</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"The good seed are the children of the kingdom."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 13:38 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"Then shall the righteous shine forth as the sun in the kingdom of their Father."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 13:43 (KJV)</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Characteristics:</strong> Children of the kingdom, sown by the Son of man, gathered into the barn, 
                    shine forth as the sun, saved.
                  </p>
                </div>
              </div>

              {/* Tares - False Believers */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-6 border-l-4 border-gray-500">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Tares: False Believers</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"The tares are the children of the wicked one."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 13:38 (KJV)</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-gray-800 mb-1">
                      <strong>"They shall gather out of his kingdom all things that offend, and them which do iniquity; And shall cast them into a furnace of fire: there shall be wailing and gnashing of teeth."</strong>
                    </p>
                    <p className="text-xs text-gray-600 text-right">— Matthew 13:41-42 (KJV)</p>
                  </div>
                  <p className="text-sm text-gray-700 mt-4">
                    <strong>Characteristics:</strong> Children of the wicked one, sown by the enemy (devil), gathered and burned, 
                    cast into furnace of fire, lost.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Another parable put he forth unto them, saying, The kingdom of heaven is likened unto a man which sowed good seed in his field: But while men slept, his enemy came and sowed tares among the wheat, and went his way."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:24-25 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let both grow together until the harvest: and in the time of harvest I will say to the reapers, Gather ye together first the tares, and bind them in bundles to burn them: but gather the wheat into my barn."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:30 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"He answered and said unto them, He that soweth the good seed is the Son of man; The field is the world; the good seed are the children of the kingdom; but the tares are the children of the wicked one; The enemy that sowed them is the devil; the harvest is the end of the world; and the reapers are the angels."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:37-39 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As therefore the tares are gathered and burned in the fire; so shall it be in the end of this world. The Son of man shall send forth his angels, and they shall gather out of his kingdom all things that offend, and them which do iniquity; And shall cast them into a furnace of fire: there shall be wailing and gnashing of teeth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:40-42 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then shall the righteous shine forth as the sun in the kingdom of their Father. Who hath ears to hear, let him hear."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 13:43 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Whose fan is in his hand, and he will throughly purge his floor, and gather his wheat into the garner; but he will burn up the chaff with unquenchable fire."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 3:12 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Whose fan is in his hand, and he will throughly purge his floor, and will gather the wheat into his garner; but the chaff he will burn with fire unquenchable."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Luke 3:17 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"The prophet that hath a dream, let him tell a dream; and he that hath my word, let him speak my word faithfully. What is the chaff to the wheat? saith the LORD."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Jeremiah 23:28 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For, lo, I will command, and I will sift the house of Israel among all nations, like as corn is sifted in a sieve, yet shall not the least grain fall upon the earth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Amos 9:9 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the distinction between wheat and tares, good seed and chaff, transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Patience:</strong> Wheat and tares grow together until the harvest. We cannot separate them prematurely. We must be patient and wait for God's timing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Discernment:</strong> We must discern between true believers (wheat) and false believers (tares), but we cannot judge prematurely. God will separate them at the harvest.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Final Separation:</strong> At the end of the age, there will be a final separation. The tares will be burned; the wheat will be gathered. The chaff will be separated and burned; the wheat will be preserved.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>True vs. False:</strong> Not everyone in the visible church is a true believer. There are both wheat and tares. We must be aware of this distinction.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>God's Judgment:</strong> The separation is God's work, not ours. We cannot and should not try to separate them prematurely. God will do it at the harvest.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding that in the visible church, there are both wheat (true believers) and tares (false believers). 
              They grow together until the harvest. We cannot separate them prematurely without uprooting the wheat. But at the end of the age, 
              God will separate them. The tares will be burned; the wheat will be gathered into the barn. The chaff will be separated and burned; 
              the wheat will be preserved. The righteous will shine forth as the sun. This is the final separation. Speak this truth clearly, 
              emphasizing patience, discernment, and trust in God's final judgment.
            </p>
          </div>
        </section>

        {/* The 7,000 Who Have Not Bowed to Baal */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              The 7,000 Who Have Not Bowed to Baal: God's Remnant
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 mb-8 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              "But what saith the answer of God unto him? I have reserved to myself seven thousand men, who have not bowed the knee to the image of Baal."
            </p>
            <p className="text-right text-gray-600 text-lg">— Romans 11:4 (KJV)</p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When Elijah thought he was alone, God revealed that He had reserved 7,000 who had not bowed to Baal. This is the remnant—the 
            faithful few who remain true to God even when the majority apostatize. This concept is crucial for understanding God's preservation 
            of His people and the reality that there are always true believers, even when they seem few.
          </p>

          {/* Elijah's Complaint */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Elijah's Complaint: "I Only Am Left"</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "And he said, I have been very jealous for the LORD God of hosts: for the children of Israel have forsaken thy covenant, thrown down thine altars, and slain thy prophets with the sword; and I, even I only, am left; and they seek my life, to take it away."
              </p>
              <p className="text-right text-gray-600">— 1 Kings 19:10 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Elijah thought he was the only one left who remained faithful to God. He felt alone, isolated, abandoned. But God knew better. 
              God had reserved 7,000 who had not bowed to Baal. Elijah's perception was wrong. God's knowledge was right.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he said, I have been very jealous for the LORD God of hosts: for the children of Israel have forsaken thy covenant, thrown down thine altars, and slain thy prophets with the sword; and I, even I only, am left; and they seek my life, to take it away."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 19:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he said, I have been very jealous for the LORD God of hosts: because the children of Israel have forsaken thy covenant, thrown down thine altars, and slain thy prophets with the sword; and I, even I only, am left; and they seek my life, to take it away."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 19:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Yet I have left me seven thousand in Israel, all the knees which have not bowed unto Baal, and every mouth which hath not kissed him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 19:18 (KJV)</p>
              </div>
            </div>
          </div>

          {/* God's Answer: 7,000 Reserved */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">God's Answer: 7,000 Reserved</h3>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "Yet I have left me seven thousand in Israel, all the knees which have not bowed unto Baal, and every mouth which hath not kissed him."
              </p>
              <p className="text-right text-gray-600">— 1 Kings 19:18 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              God's answer was clear: He had reserved 7,000 in Israel who had not bowed to Baal. These were the faithful remnant—those who 
              remained true to God even when the majority apostatize. They had not bowed the knee to Baal. They had not kissed Baal. 
              They remained faithful.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Yet I have left me seven thousand in Israel, all the knees which have not bowed unto Baal, and every mouth which hath not kissed him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 19:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But what saith the answer of God unto him? I have reserved to myself seven thousand men, who have not bowed the knee to the image of Baal."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Even so then at this present time also there is a remnant according to the election of grace."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:5 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Remnant According to Election of Grace */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Remnant According to Election of Grace</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Paul applies this principle to his own time: "Even so then at this present time also there is a remnant according to the election of grace." 
              There is always a remnant—a faithful few who remain true to God. This remnant is according to the election of grace, not works.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I say then, Hath God cast away his people? God forbid. For I also am an Israelite, of the seed of Abraham, of the tribe of Benjamin."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"God hath not cast away his people which he foreknew. Wot ye not what the scripture saith of Elias? how he maketh intercession to God against Israel, saying,"</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Lord, they have killed thy prophets, and digged down thine altars; and I am left alone, and they seek my life."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But what saith the answer of God unto him? I have reserved to myself seven thousand men, who have not bowed the knee to the image of Baal."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Even so then at this present time also there is a remnant according to the election of grace."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And if by grace, then is it no more of works: otherwise grace is no more grace. But if it be of works, then is it no more grace: otherwise work is no more work."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:6 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Not Bowed the Knee to Baal */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Not Bowed the Knee to Baal</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The 7,000 had not bowed the knee to Baal. They had not compromised. They had not apostatize. They remained faithful to God 
              even when the majority turned away. This is the mark of the remnant—faithfulness in the face of apostasy.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Yet I have left me seven thousand in Israel, all the knees which have not bowed unto Baal, and every mouth which hath not kissed him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 19:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But what saith the answer of God unto him? I have reserved to myself seven thousand men, who have not bowed the knee to the image of Baal."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And Elijah came unto all the people, and said, How long halt ye between two opinions? if the LORD be God, follow him: but if Baal, then follow him. And the people answered him not a word."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 18:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"No man can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 6:24 (KJV)</p>
              </div>
            </div>
          </div>

          {/* God's Preservation of the Remnant */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">God's Preservation of the Remnant</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              God preserves His remnant. He reserves them for Himself. They are His. He knows who they are, even when they seem few. 
              He protects them, even when they seem alone. He preserves them, even when the majority apostatize.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Yet I have left me seven thousand in Israel, all the knees which have not bowed unto Baal, and every mouth which hath not kissed him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 19:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But what saith the answer of God unto him? I have reserved to myself seven thousand men, who have not bowed the knee to the image of Baal."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Even so then at this present time also there is a remnant according to the election of grace."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And I will make them and the places round about my hill a blessing; and I will cause the shower to come down in his season; there shall be showers of blessing."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ezekiel 34:26 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And it shall come to pass, that in all the land, saith the LORD, two parts therein shall be cut off and die; but the third shall be left therein."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Zechariah 13:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And I will bring the third part through the fire, and will refine them as silver is refined, and will try them as gold is tried: they shall call on my name, and I will hear them: I will say, It is my people: and they shall say, The LORD is my God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Zechariah 13:9 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Faithful Few */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Faithful Few: Always a Remnant</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Throughout history, there has always been a remnant—a faithful few who remain true to God. Even when the majority apostatize, 
              even when it seems like everyone has turned away, God always has His remnant. They are the 7,000 who have not bowed to Baal.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Even so then at this present time also there is a remnant according to the election of grace."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But what saith the answer of God unto him? I have reserved to myself seven thousand men, who have not bowed the knee to the image of Baal."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Except the LORD of hosts had left unto us a very small remnant, we should have been as Sodom, and we should have been like unto Gomorrah."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 1:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And it shall come to pass in that day, that the remnant of Israel, and such as are escaped of the house of Jacob, shall no more again stay upon him that smote them; but shall stay upon the LORD, the Holy One of Israel, in truth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 10:20 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And the remnant of Jacob shall be in the midst of many people as a dew from the LORD, as the showers upon the grass, that tarrieth not for man, nor waiteth for the sons of men."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Micah 5:7 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And he said, I have been very jealous for the LORD God of hosts: for the children of Israel have forsaken thy covenant, thrown down thine altars, and slain thy prophets with the sword; and I, even I only, am left; and they seek my life, to take it away."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 19:10 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Yet I have left me seven thousand in Israel, all the knees which have not bowed unto Baal, and every mouth which hath not kissed him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Kings 19:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I say then, Hath God cast away his people? God forbid. For I also am an Israelite, of the seed of Abraham, of the tribe of Benjamin."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"God hath not cast away his people which he foreknew. Wot ye not what the scripture saith of Elias? how he maketh intercession to God against Israel, saying, Lord, they have killed thy prophets, and digged down thine altars; and I am left alone, and they seek my life."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:2-3 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But what saith the answer of God unto him? I have reserved to myself seven thousand men, who have not bowed the knee to the image of Baal."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Even so then at this present time also there is a remnant according to the election of grace."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And if by grace, then is it no more of works: otherwise grace is no more grace. But if it be of works, then is it no more grace: otherwise work is no more work."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 11:6 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Except the LORD of hosts had left unto us a very small remnant, we should have been as Sodom, and we should have been like unto Gomorrah."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 1:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And it shall come to pass in that day, that the remnant of Israel, and such as are escaped of the house of Jacob, shall no more again stay upon him that smote them; but shall stay upon the LORD, the Holy One of Israel, in truth."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Isaiah 10:20 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding the 7,000 who have not bowed to Baal transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>You Are Not Alone:</strong> Even when it seems like you're the only one, God has His remnant. There are always faithful believers, even when they seem few.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>God Preserves His Remnant:</strong> God reserves His remnant for Himself. He knows who they are. He protects them. He preserves them.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Remnant According to Grace:</strong> The remnant is according to the election of grace, not works. It is God's work, not man's.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Not Bowed to Baal:</strong> The remnant has not bowed to Baal. They have not compromised. They remain faithful even when the majority apostatize.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Always a Remnant:</strong> Throughout history, there has always been a remnant. Even when it seems like everyone has turned away, God always has His faithful few.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding that God always has His remnant. When Elijah thought he was alone, God revealed that 
              He had reserved 7,000 who had not bowed to Baal. This is the remnant—the faithful few who remain true to God even when the 
              majority apostatize. The remnant is according to the election of grace. God preserves them. He knows who they are, even when 
              they seem few. There are always true believers, even when they seem alone. Speak this truth clearly, encouraging believers 
              that they are not alone, that God has His remnant, and that faithfulness will be rewarded.
            </p>
          </div>
        </section>

        {/* Can True Christians Follow False Philosophy, Religion, and Ideas? */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Can True Christians Follow False Philosophy, False Religion, and False Ideas?
            </span>
          </h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 mb-8 rounded">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              The answer is clear: No. True Christians cannot and must not follow false philosophy, false religion, or false ideas. 
              The Bible is explicit: we must follow Christ alone, His Word alone, His truth alone. Anything else is compromise, 
              apostasy, and unfaithfulness to God.
            </p>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The Bible warns repeatedly against false philosophy, false religion, and false ideas. True Christians are called to follow 
            Christ alone, to be rooted in His Word alone, to walk in truth alone. Following anything else is not an option for the true believer.
          </p>

          {/* Beware of Philosophy and Vain Deceit */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Beware of Philosophy and Vain Deceit</h3>
            
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                "Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."
              </p>
              <p className="text-right text-gray-600">— Colossians 2:8 (KJV)</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Paul explicitly warns: beware of philosophy and vain deceit. This is not after Christ. It is after the tradition of men, 
              after the rudiments of the world. True Christians must not be spoiled—corrupted, led astray—by such things.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wisdom of this world is foolishness with God. For it is written, He taketh the wise in their own craftiness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Let no man deceive himself. If any man among you seemeth to be wise in this world, let him become a fool, that he may be wise."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:18 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Howbeit we speak wisdom among them that are perfect: yet not the wisdom of this world, nor of the princes of this world, that come to nought: But we speak the wisdom of God in a mystery, even the hidden wisdom, which God ordained before the world unto our glory."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But we have received, not the spirit of the world, but the spirit which is of God; that we might know the things that are freely given to us of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:12 (KJV)</p>
              </div>
            </div>
          </div>

          {/* No Other Gospel */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">No Other Gospel: Only the Grace Gospel</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              There is only one gospel: the grace gospel. Any other gospel is false. True Christians cannot follow false gospels. 
              They must follow the one true gospel—the gospel of grace.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel: Which is not another; but there be some that trouble you, and would pervert the gospel of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As we said before, so say I now again, If any man preach any other gospel unto you than that ye have received, let him be accursed."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:9 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But I certify you, brethren, that the gospel which was preached of me is not after man. For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:11-12 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Follow Christ Alone */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Follow Christ Alone: Not Man's Ideas</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              True Christians must follow Christ alone. Not man's philosophy. Not man's religion. Not man's ideas. Christ alone. 
              His Word alone. His truth alone.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then said Jesus to those Jews which believed on him, If ye continue in my word, then are ye my disciples indeed; And ye shall know the truth, and the truth shall make you free."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 8:31-32 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 14:6 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For other foundation can no man lay than that is laid, which is Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As ye have therefore received Christ Jesus the Lord, so walk ye in him: Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:8 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Beware of False Teachers and Doctrines */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Beware of False Teachers and Doctrines</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Bible repeatedly warns against false teachers and false doctrines. True Christians must beware. They must test all things. 
              They must hold fast to what is good. They must reject what is false.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware of false prophets, which come to you in sheep's clothing, but inwardly they are ravening wolves."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 7:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the time will come when they will not endure sound doctrine; but after their own lusts shall they heap to themselves teachers, having itching ears; And they shall turn away their ears from the truth, and shall be turned unto fables."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Timothy 4:3-4 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But there were false prophets also among the people, even as there shall be false teachers among you, who privily shall bring in damnable heresies, even denying the Lord that bought them, and bring upon themselves swift destruction."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Peter 2:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 John 4:1 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Prove all things; hold fast that which is good."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Thessalonians 5:21 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any man teach otherwise, and consent not to wholesome words, even the words of our Lord Jesus Christ, and to the doctrine which is according to godliness; He is proud, knowing nothing, but doting about questions and strifes of words, whereof cometh envy, strife, railings, evil surmisings."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Timothy 6:3-4 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The World's Wisdom vs. God's Wisdom */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The World's Wisdom vs. God's Wisdom</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              True Christians cannot follow the world's wisdom. The world's wisdom is foolishness with God. True Christians must follow 
              God's wisdom—the wisdom that comes from above, the wisdom revealed in His Word.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For the wisdom of this world is foolishness with God. For it is written, He taketh the wise in their own craftiness."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:19 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Howbeit we speak wisdom among them that are perfect: yet not the wisdom of this world, nor of the princes of this world, that come to nought: But we speak the wisdom of God in a mystery, even the hidden wisdom, which God ordained before the world unto our glory."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But the wisdom that is from above is first pure, then peaceable, gentle, and easy to be intreated, full of mercy and good fruits, without partiality, and without hypocrisy."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— James 3:17 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— James 1:5 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But God hath revealed them unto us by his Spirit: for the Spirit searcheth all things, yea, the deep things of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 2:10 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Be Not Conformed to This World */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Be Not Conformed to This World</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              True Christians must not be conformed to this world. They must be transformed by the renewing of their minds. 
              They must not follow the world's patterns, the world's philosophy, the world's religion. They must follow Christ.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 12:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Love not the world, neither the things that are in the world. If any man love the world, the love of the Father is not in him."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 John 2:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For all that is in the world, the lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but is of the world."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 John 2:16 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And the world passeth away, and the lust thereof: but he that doeth the will of God abideth for ever."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 John 2:17 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Wherefore come out from among them, and be ye separate, saith the Lord, and touch not the unclean thing; and I will receive you."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 2 Corinthians 6:17 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Rooted in Christ, Not in Man's Ideas */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Rooted in Christ, Not in Man's Ideas</h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              True Christians are rooted in Christ. They are built up in Him. They are established in the faith. They are not rooted 
              in man's philosophy, man's religion, or man's ideas. They are rooted in Christ alone.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As ye have therefore received Christ Jesus the Lord, so walk ye in him: Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For other foundation can no man lay than that is laid, which is Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"That we henceforth be no more children, tossed to and fro, and carried about with every wind of doctrine, by the sleight of men, and cunning craftiness, whereby they lie in wait to deceive."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 4:14 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But speaking the truth in love, may grow up into him in all things, which is the head, even Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Ephesians 4:15 (KJV)</p>
              </div>
            </div>
          </div>

          {/* The Answer: No, True Christians Cannot Follow False Ideas */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">The Answer: No, True Christians Cannot Follow False Ideas</h3>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                The answer is clear and unequivocal: No. True Christians cannot and must not follow false philosophy, false religion, 
                or false ideas. To do so is to compromise, to apostatize, to be unfaithful to God.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              True Christians are called to follow Christ alone. They are rooted in Him. They are built up in Him. They are established 
              in His Word. They cannot follow man's philosophy, man's religion, or man's ideas. To do so is to deny Christ, to compromise 
              the truth, to be unfaithful to God.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As ye have therefore received Christ Jesus the Lord, so walk ye in him: Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then said Jesus to those Jews which believed on him, If ye continue in my word, then are ye my disciples indeed; And ye shall know the truth, and the truth shall make you free."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 8:31-32 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 14:6 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Additional Supporting Verses */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Additional Supporting Verses</h3>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware lest any man spoil you through philosophy and vain deceit, after the tradition of men, after the rudiments of the world, and not after Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"As ye have therefore received Christ Jesus the Lord, so walk ye in him: Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Colossians 2:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"I marvel that ye are so soon removed from him that called you into the grace of Christ unto another gospel: Which is not another; but there be some that trouble you, and would pervert the gospel of Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:6-7 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"But though we, or an angel from heaven, preach any other gospel unto you than that which we have preached unto you, let him be accursed."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Galatians 1:8 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Then said Jesus to those Jews which believed on him, If ye continue in my word, then are ye my disciples indeed; And ye shall know the truth, and the truth shall make you free."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 8:31-32 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— John 14:6 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"For other foundation can no man lay than that is laid, which is Jesus Christ."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 Corinthians 3:11 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Romans 12:2 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beware of false prophets, which come to you in sheep's clothing, but inwardly they are ravening wolves."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— Matthew 7:15 (KJV)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-800 mb-2">
                  <strong>"Beloved, believe not every spirit, but try the spirits whether they are of God: because many false prophets are gone out into the world."</strong>
                </p>
                <p className="text-sm text-gray-600 text-right">— 1 John 4:1 (KJV)</p>
              </div>
            </div>
          </div>

          {/* Application to Communication */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 mb-8 border-l-4 border-amber-500">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Application to Communication</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Understanding that true Christians cannot follow false philosophy, false religion, or false ideas transforms how we communicate:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Follow Christ Alone:</strong> True Christians must follow Christ alone—not man's philosophy, not man's religion, not man's ideas. This is non-negotiable.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Beware of False Ideas:</strong> We must beware of philosophy and vain deceit. We must test all things. We must hold fast to what is good. We must reject what is false.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>Rooted in Christ:</strong> We must be rooted in Christ, built up in Him, established in His Word. We cannot be rooted in man's ideas.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>No Compromise:</strong> There is no room for compromise. We cannot follow false philosophy, false religion, or false ideas. To do so is to deny Christ.</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold mr-3">•</span>
                <span><strong>God's Wisdom, Not World's:</strong> We must follow God's wisdom, not the world's wisdom. The world's wisdom is foolishness with God. God's wisdom is revealed in His Word.</span>
              </li>
            </ul>
            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              Rightly dividing means understanding that true Christians cannot and must not follow false philosophy, false religion, or false ideas. 
              The answer is clear: No. True Christians must follow Christ alone. They must be rooted in Him. They must be built up in Him. 
              They must be established in His Word. They must beware of philosophy and vain deceit. They must not be conformed to this world. 
              They must follow God's wisdom, not the world's wisdom. There is no room for compromise. To follow false ideas is to deny Christ, 
              to compromise the truth, to be unfaithful to God. Speak this truth clearly, emphasizing that true Christians follow Christ alone, 
              not man's philosophy, not man's religion, not man's ideas.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-gradient-to-r from-indigo-600 to-pink-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Conclusion: Rightly Dividing for Clear Communication</h2>
          <p className="text-lg leading-relaxed mb-4">
            Understanding the distinction between the Kingdom Gospel and the Grace Gospel is essential for speaking truth with clarity and conviction. 
            When you rightly divide the word of truth, you understand:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 text-lg">
            <li>The law cannot save; it reveals sin</li>
            <li>Salvation is by grace through faith, not by works</li>
            <li>Abraham was justified by grace before the law existed</li>
            <li>Works are the fruit of salvation, not the root</li>
            <li>Peter preached to the circumcised (Israel); Paul to the uncircumcised (Gentiles)</li>
            <li>There is only one gospel for today: the grace gospel Paul received by revelation</li>
            <li>Beware of false gospels that mix law with grace</li>
            <li>Foundation principles (기초원리) are essential but elementary—the starting point, not the destination</li>
            <li>Perfection (완전한 원리) means maturity—moving from milk to strong meat, from babe to teacher</li>
            <li>We must not keep laying the foundation; we must build upon it and press toward perfection</li>
            <li>The grace gospel is simple: Christ died for our sins, was buried, and rose again (1 Corinthians 15:1-4)</li>
            <li>This gospel saves by faith alone—nothing added, nothing taken away</li>
            <li>We stand in this gospel, secure and sealed by the Holy Spirit</li>
            <li>Beware of any gospel that adds requirements to the simple message of grace</li>
            <li>Salvation is by grace (secure), but rewards are by works (earned) - 1 Corinthians 3:10-15</li>
            <li>Build with gold, silver, precious stones (valuable works) to receive rewards</li>
            <li>Avoid wood, hay, stubble (worthless works) that will burn and cause loss</li>
            <li>Even if all works burn, the believer is still saved - salvation is never lost</li>
            <li>Paul is the wise masterbuilder who laid the foundation (1 Corinthians 3:10)</li>
            <li>The foundation is Jesus Christ and the grace gospel - secure and unshakeable</li>
            <li>Each person must take heed how they build upon this foundation</li>
            <li>Build wisely with valuable materials to receive rewards</li>
            <li>God's existence is manifest in creation - clearly seen, understood by the things that are made (Romans 1:19-20)</li>
            <li>The fool says in his heart, "There is no God" - but they are without excuse (Psalm 14:1, 53:1)</li>
            <li>Creation reveals God's eternal power and Godhead - evidence is everywhere</li>
            <li>Those who deny God suppress the truth and their hearts are darkened</li>
            <li>Humanity changed the glory of the incorruptible God into images of corruptible creatures (Romans 1:23)</li>
            <li>They worshipped and served the creature more than the Creator, who is blessed forever (Romans 1:25)</li>
            <li>This is the ultimate folly - the great exchange of truth for a lie</li>
            <li>Modern idolatry includes worshipping money, success, self, or any created thing more than the Creator</li>
            <li>Putting traditions of men above the Word of God is vain worship (Matthew 15:3, 9)</li>
            <li>Teaching commandments of men as doctrines makes worship vain and worthless</li>
            <li>Human traditions make void the Word of God and transgress God's commandments</li>
            <li>True worship is in spirit and truth, from the heart, following God's Word</li>
            <li>Knowledge of God is essential - rejecting God in knowledge leads to a reprobate mind (Romans 1:28)</li>
            <li>Renewing the mind enables us to prove what is that good, acceptable, and perfect will of God (Romans 12:2)</li>
            <li>Right thinking leads to right living - the mind determines the direction of life</li>
            <li>We have the mind of Christ - thinking like God thinks, seeing from God's perspective</li>
            <li>We must obey God rather than men - preach the word in season and out of season (Acts 5:29, 2 Timothy 4:2)</li>
            <li>We must speak truth about religion, politics, and homosexuality - not remain silent</li>
            <li>We must speak truth in love - with compassion, to bring people to Christ (Ephesians 4:15)</li>
            <li>We are salt and light - we cannot hide truth, we must speak it and shine it (Matthew 5:13-16)</li>
            <li>In the visible church, there are both wheat (true believers) and tares (false believers) - they grow together until the harvest (Matthew 13:24-30)</li>
            <li>The chaff must be separated from the wheat - the chaff will be burned with unquenchable fire (Matthew 3:12)</li>
            <li>At the end of the age, God will separate them - tares burned, wheat gathered into the barn (Matthew 13:40-43)</li>
            <li>We must be patient and cannot separate them prematurely - God will do it at the harvest</li>
            <li>God always has His remnant - the 7,000 who have not bowed to Baal (1 Kings 19:18, Romans 11:4)</li>
            <li>The remnant is according to the election of grace, not works (Romans 11:5-6)</li>
            <li>Even when it seems like you're alone, God has His faithful few who remain true to Him</li>
            <li>God preserves His remnant - He reserves them for Himself and knows who they are</li>
            <li>True Christians cannot follow false philosophy, false religion, or false ideas - they must follow Christ alone (Colossians 2:8)</li>
            <li>We must beware of philosophy and vain deceit - not after Christ, but after the tradition of men</li>
            <li>True Christians are rooted in Christ, built up in Him, established in His Word - not in man's ideas</li>
            <li>There is no room for compromise - to follow false ideas is to deny Christ and be unfaithful to God</li>
          </ul>
          <p className="text-lg leading-relaxed">
            When you understand these distinctions, you speak with authority that comes from knowing truth itself. You're not seeking approval 
            through performance; you're speaking from a place of being already approved by God's grace. You're not stuck in the basics; 
            you're pressing toward maturity and perfection. You're not trying to earn salvation; you're declaring the simple gospel that saves. 
            You're building with valuable materials—in the Spirit, for God's glory, with love—knowing that while salvation is secure, 
            rewards are earned. You stand on the foundation Paul laid as the wise masterbuilder—Jesus Christ and the grace gospel. 
            This foundation is secure. Build wisely upon it. You know that God's existence is manifest in creation—clearly seen, 
            understood by the things that are made. The fool says there is no God, but they are without excuse. Creation itself testifies 
            to the Creator. You understand the ultimate folly: worshipping and serving the creature more than the Creator. This is the great 
            exchange—the truth of God for a lie, the glory of the incorruptible God for images of corruptible creatures. The Creator is blessed 
            forever. He alone is worthy of worship. You understand the ultimate religious folly: putting the traditions of men—the commandments 
            of elders—above the Word of God. This is vain worship. It is transgressing God's commandments to keep human traditions. True worship 
            is in spirit and truth, from the heart, following God's Word, not man's traditions. You understand the critical importance of 
            knowledge of God and renewing the mind. When people reject God in their knowledge, they are given over to a reprobate mind. But when 
            we renew our minds according to God's Word, we can prove what is that good, and acceptable, and perfect will of God. Right thinking 
            leads to right living. The mind of Christ enables us to think like God thinks and live according to His will. You understand that 
            we must obey God rather than men. When religious leaders or the world tell us to be silent about religion, politics, or homosexuality, 
            we must choose to obey God. We must preach the word in season and out of season. We must speak truth in love. We must be salt and light. 
            We must fulfill our responsibility as watchmen. You understand that in the visible church, there are both wheat (true believers) and 
            tares (false believers). They grow together until the harvest. The chaff must be separated from the wheat. At the end of the age, 
            God will separate them. The tares will be burned; the wheat will be gathered into the barn. The chaff will be separated and burned; 
            the wheat will be preserved. We must be patient and cannot separate them prematurely. You understand that God always has His remnant—the 
            7,000 who have not bowed to Baal. Even when it seems like you're alone, God has His faithful few who remain true to Him. The remnant is 
            according to the election of grace. God preserves them. He knows who they are, even when they seem few. You understand that true Christians 
            cannot and must not follow false philosophy, false religion, or false ideas. The answer is clear: No. True Christians must follow Christ 
            alone. They must be rooted in Him. They must be built up in Him. They must be established in His Word. They must beware of philosophy and 
            vain deceit. They must not be conformed to this world. They must follow God's wisdom, not the world's wisdom. There is no room for compromise. 
            This is the believer's position. This is the foundation of eloquent, confident communication.
          </p>
          <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
            <p className="text-xl italic mb-2">
              "Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth."
            </p>
            <p className="text-right">— 2 Timothy 2:15 (KJV)</p>
          </div>
        </section>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            ← Back to Home
          </Link>
          <Link
            href="/lesson/1"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
          >
            Start Day 1 →
          </Link>
        </div>
      </main>
    </div>
  );
}

