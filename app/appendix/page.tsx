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
          </ul>
          <p className="text-lg leading-relaxed">
            When you understand these distinctions, you speak with authority that comes from knowing truth itself. You're not seeking approval 
            through performance; you're speaking from a place of being already approved by God's grace. You're not stuck in the basics; 
            you're pressing toward maturity and perfection. You're not trying to earn salvation; you're declaring the simple gospel that saves. 
            You're building with valuable materials—in the Spirit, for God's glory, with love—knowing that while salvation is secure, 
            rewards are earned. You stand on the foundation Paul laid as the wise masterbuilder—Jesus Christ and the grace gospel. 
            This foundation is secure. Build wisely upon it. You know that God's existence is manifest in creation—clearly seen, 
            understood by the things that are made. The fool says there is no God, but they are without excuse. Creation itself testifies 
            to the Creator. This is the foundation of eloquent, confident communication.
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

