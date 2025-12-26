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
          </ul>
          <p className="text-lg leading-relaxed">
            When you understand these distinctions, you speak with authority that comes from knowing truth itself. You're not seeking approval 
            through performance; you're speaking from a place of being already approved by God's grace. You're not stuck in the basics; 
            you're pressing toward maturity and perfection. This is the foundation of eloquent, confident communication.
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

