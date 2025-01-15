import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/Section-header1"
import { ArticleCard } from '@/components/Article-card1'

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Politics Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <SectionHeader title="Politics" />
            <div className="space-y-8">
              <ArticleCard
                title="Gov. Kristi Noem, a homeland security chief hopeful, is banned in parts of her state"
                image="/placeholder.svg"
                size="large"
              />
              <div className="space-y-6 divide-y divide-gray-100">
                <ArticleCard
                  title="The immigration bill that's accelerating a Democratic reckoning"
                  tag="analysis"
                  author="Mary Kazninski, Patrick Svitek and Alec Dent"
                />
                <div className="pt-6">
                  <ArticleCard
                    title="The U.S. government runs on Celsius. Just ask anyone on Capitol Hill."
                  />
                </div>
                <div className="pt-6">
                  <ArticleCard
                    title="Koch-backed group to GOP: Move fast on tax cuts to help keep Latino voters"
                  />
                </div>
                <div className="pt-6">
                  <ArticleCard
                    title="Will Trump keep his huge early promises? A scorecard."
                    tag="analysis"
                    author="Aaron Blake"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* National Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <SectionHeader title="National" />
            <div className="space-y-8">
              <ArticleCard
                title="Police are using facial recognition to arrest suspects without other evidence"
                image="/placeholder.svg"
                tag="exclusive"
                size="large"
              />
              <div className="space-y-6 divide-y divide-gray-100">
                <ArticleCard
                  title="Republicans say they want to put conditions on wildfire aid to California"
                />
                <div className="pt-6">
                  <ArticleCard
                    title="'It's a miracle': The houses in their neighborhood burned down, but their homes were spared"
                  />
                </div>
                <div className="pt-6">
                  <ArticleCard
                    title="How New Orleans failed to protect Bourbon Street from attack, block by block"
                    tag="exclusive"
                  />
                </div>
                <div className="pt-6">
                  <ArticleCard
                    title="Judge questions Justice Dept. over Louisville police accountability plan"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* World Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <SectionHeader title="World" />
            <div className="space-y-8">
              <ArticleCard
                title="NATO launches new naval operation in Baltic Sea after severing of cables"
                image="/placeholder.svg"
                imagePosition="left"
              />
              <div className="space-y-6 divide-y divide-gray-100">
                <ArticleCard
                  title="Here's what we know about proposed Israel-Hamas ceasefire deal so far"
                />
                <div className="pt-6">
                  <ArticleCard
                    title="Britain's Princess of Wales says her cancer is in remission"
                  />
                </div>
                <div className="pt-6">
                  <ArticleCard
                    title="Syria's children, having known only war, adjust to a sudden peace"
                  />
                </div>
                <div className="pt-6">
                  <ArticleCard
                    title="Brazil joins growing list of countries banning cellphones in schools"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business & Technology Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <SectionHeader title="Business & Technology" />
            <div className="space-y-8">
              <ArticleCard
                title="Got a text about an unpaid toll? It's almost definitely a scam."
                image="/placeholder.svg"
                imagePosition="left"
              />
              <div className="space-y-6 divide-y divide-gray-100">
                <ArticleCard
                  title="Classified information is out in the open. There's no need to panic."
                  tag="analysis"
                  author="Nate Jones"
                />
                <div className="pt-6">
                  <ArticleCard
                    title="The push to 'billionaire-proof' social media"
                    tag="analysis"
                    author="Will Oremus and Andrea Jiménez"
                  />
                </div>
                <div className="pt-6">
                  <ArticleCard
                    title="McDonald's sued over scholarships for Hispanic and Latino students"
                  />
                </div>
                <div className="pt-6">
                  <ArticleCard
                    title="'TikTok refugees' flock to another (heavily censored) Chinese app"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

