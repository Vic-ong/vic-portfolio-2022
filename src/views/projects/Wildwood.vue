<script lang="ts">
  import { defineComponent } from 'vue';
  import { img, footage } from '@/constants/assets';
  import ProjectContainer from '@/components/ProjectContainer.vue';
  import ProjectOverview from '@/components/ProjectOverview.vue';
  import MediaPlayer from '@/components/MediaPlayer.vue';

  export default defineComponent({
    name: 'Wildwood',
    components: {
      ProjectContainer,
      ProjectOverview,
      MediaPlayer,
    },
    setup() {
      const projectInfo = {
        title: 'Wildwood',
        desc: 'Wildwood is an action RPG vertical slice where a raccoon, a skunk, a cat goes on an adventure forming alliances to rise against a gruelling pack of coyotes.',
        objective: 'The goal is to build a proof of concept of an animal-based action RPG with a tag team combat feature, battle strategy development, and a quest system.',
        img: img.wildwood.hero,
        role: 'Unreal Engine developer, Project manager',
        tools: 'Unreal Engine 4 (Recently upgraded to UE5)',
        duration: '3 months',
        wip: false,
      };

      const contributions = [
        'Create and manage the product roadmap to ensure that we\'re building a useful product',
        'Implement aim and shoot mechanics based on the weapon type equipped',
        'Develop damage and damage type system',
        'Develop a quest and dialog system',
        'Design and implement 3 levels',
      ];

      const heroes = [
        {
          name: 'Bev the Raccoon',
          weapon: 'Fist',
          attrs: {
            hp: '230',
            stamina: '200',
            moveSpeed: '500',
          },
          sa1: {
            name: 'Battle cry',
            desc: 'Enhances your defense and attack damage',
            effect: 'Increase amor by 100% and damage by 100%',
          },
          sa2: {
            name: 'Raccoon instinct',
            desc: 'Move swiftly for a period of time to dodge attacks',
            effect: 'Increase move speed by 70% and evasion chance by 25%',
          },
        },
        {
          name: 'Leo the Bengal cat',
          weapon: 'Machine Guns',
          attrs: {
            hp: '90',
            stamina: '100',
            moveSpeed: '350',
          },
          sa1: {
            name: 'Battery shots',
            desc: '	Imbue your water bullets with electricity',
            effect: '15% to stun enemies on each attack',
          },
          sa2: {
            name: 'Camouflage',
            desc: '	Becomes invisible for a period of time. Breaks invisibility when attack',
            effect: '7s duration',
          },
        },
        {
          name: 'Mel the Skunk',
          weapon: 'Shotguns',
          attrs: {
            hp: '150',
            stamina: '150',
            moveSpeed: '450',
          },
          sa1: {
            name: 'Skunk perfume aura',
            desc: 'Surrounds herelf with a powerful skunk aura',
            effect: 'Increase your critical chance by 100% and HP regen by 200%',
          },
          sa2: {
            name: 'Magic perfume bomb',
            desc: 'Using her own perfume, Mel can toss a magical bomb to slow down enemies',
            effect: 'Reduce enemy\'s attack speed and move speed by 30%',
          },
        },
        {
          name: 'Jack the Weasel',
          weapon: 'Slingshots',
          attrs: {
            hp: '110',
            stamina: '120',
            moveSpeed: '420',
          },
          sa1: {
            name: 'Splash shot',
            desc: 'Enhance his shots with fire for splash damage',
            effect: 'Increase your damage by 50% with a 300 splash radius',
          },
          sa2: {
            name: 'Nocturnal',
            desc: 'Passive ability. Moves swiftly at nighttime',
            effect: 'Increase move speed by 40% at nighttime',
          },
        },
        {
          name: 'Snow the Snowshoe Hare',
          weapon: 'Traps',
          attrs: {
            hp: '70',
            stamina: '110',
            moveSpeed: '330',
          },
          sa1: {
            name: 'Decoy hare',
            desc: 'Creates an illusion of itself to distract enemies. Unable to control the illusion and the illusion will move to random locations',
            effect: 'Decoy hare lasts 20s',
          },
          sa2: {
            name: 'Popeye\'s carrot',
            desc: 'Briefly provides a massive increase in defense and attack damage',
            effect: 'Increase amor by 100% and damage by 100%',
          },
        },
        {
          name: 'Fluff the porcupine',
          weapon: 'Snipers',
          attrs: {
            hp: '130',
            stamina: '80',
            moveSpeed: '300',
          },
          sa1: {
            name: 'Sonic attack',
            desc: 'Rolls up in a ball for a period of time and has increased movement speed. Any enemy that touches fluff will receive damage',
            effect: 'Apply 100 damage or any enemies with 50 radius and increase move speed by 70%',
          },
          sa2: {
            name: 'Tranquilizer',
            desc: 'Imbues his quills with poison that puts enemies to sleep for a brief period of time while taking damage over time',
            effect: 'Stuns enemy for 3s and apply 100 poison damage over 5s',
          },
        },
      ];

      return {
        scrollTo,
        img: img.wildwood,
        footage: footage.wildwood,
        projectInfo,
        contributions,
        heroes,
      };
    },
  });
</script>

<template>
  <ProjectContainer>
    <ProjectOverview :data="projectInfo" />
    <div class="pt-12 space-y-12">
      <MediaPlayer :src="footage.bonfire" />

      <Section title="Team Composition">
        <div>
          Our team consists of 5 team members with interdisciplinary backgrounds. Myself (developer and project manager), Isabela Lopez (UX UI designer), Kennedy Kan (3D artist), Ileana (narrative designer), and Sachit (narrative writer).
        </div>
      </Section>

      <Section title="Key Contributions">
        <List :items="contributions" />
      </Section>
        
      <Section title="Details">
        <SubSection title="Heroes and Weapons">
          <div>
            Each hero has its own unique weapon class, attributes, and special abilities. The characters are designed in a way that it requires collaboration to succeed in a battle.
          </div>
          <div class="grid grid-cols-7 text-base border-2 border-black rounded-md">
            <div class="p-3 text-white bg-black">
              Hero
            </div>
            <div class="p-3 text-white bg-black">
              Weapon class
            </div>
            <div class="p-3 text-white bg-black">
              Attributes
            </div>
            <div class="col-span-2 p-3 text-white bg-black">
              Special ability 1
            </div>
            <div class="col-span-2 p-3 text-white bg-black">
              Special ability 2
            </div>
            <template
              v-for="hero in heroes"
              :key="hero.name"
            >
              <div class="p-3 font-bold border-t-2 border-black">
                {{ hero.name }}
              </div>
              <div class="p-3 font-semibold border-t-2 border-l-2 border-black">
                {{ hero.weapon }}
              </div>
              <div class="p-3 space-y-2 border-t-2 border-l-2 border-black">
                <div>
                  HP:
                  <div class="font-semibold">
                    {{ hero.attrs.hp }}
                  </div>
                </div>
                <div>
                  Stamina:
                  <div class="font-semibold">
                    {{ hero.attrs.stamina }}
                  </div>
                </div>
                <div>
                  Move speed:
                  <div class="font-semibold">
                    {{ hero.attrs.moveSpeed }}
                  </div>
                </div>
              </div>
              <div class="col-span-2 p-3 border-t-2 border-l-2 border-black">
                <div class="space-y-2">
                  <div class="font-semibold">
                    {{ hero.sa1.name }}
                  </div>
                  <div>
                    {{ hero.sa1.desc }}
                  </div>
                  <div class="text-primary">
                    {{ hero.sa1.effect }}
                  </div>
                </div>
              </div>
              <div class="col-span-2 p-3 border-t-2 border-l-2 border-black">
                <div class="space-y-2">
                  <div class="font-semibold">
                    {{ hero.sa2.name }}
                  </div>
                  <div>
                    {{ hero.sa2.desc }}
                  </div>
                  <div class="text-primary">
                    {{ hero.sa2.effect }}
                  </div>
                </div>
              </div>
            </template>
          </div>
        </SubSection>

        <SubSection title="Tag team">
          <div>
            In order to utilize the different heroes' in a battle, I've added a tag team system where players can press "Tab" to switch to another hero
          </div>
          <div>
            For instance, Bev is a melee hero and while he does very high damage and has high HP, he will need other ranged heroes such as Leo to deal with long-ranged enemies.
          </div>
          <MediaPlayer
            :src="footage.tagTeam"
            :muted="false"
            :loop="false"
            :autoplay="false"
            show-controls
          />
        </SubSection>

        <SubSection title="Special abilities">
          <div>
            As seen on the table above, each hero has its won unique special ability to aid themselves in a combat. The video below showcases Bev's special ability to increase his amor and Leo's special ability to add electricity to her attacks.
          </div>
          <MediaPlayer
            :src="footage.specialAbilities"
            :muted="false"
            :loop="false"
            :autoplay="false"
            show-controls
          />
        </SubSection>

        <SubSection title="Dialog and quests">
          <div>
            I implemented a dialog system that gets integrated with the quest system. In this proof of concept, we developed a quest that tells the player to defeat the coyote boss, Dust, and his followers who's been taunting the wildlife community for a while.
          </div>
          <div>
            I generated the animalese voiceovers by using a free web app made by a developer. On each dialog line, it will prompt the player to press "SPACE" to continue. This provides time for each player to read through the dialog and understands the premise.
          </div>
          <MediaPlayer
            :src="footage.dialogAndQuest" 
            :muted="false"
            :loop="false"
            :autoplay="false"
            show-controls
          />
        </SubSection>
      </Section>
    </div>
  </ProjectContainer>
</template>
