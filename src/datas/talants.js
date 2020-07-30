export default class Talants{
    static GUNZERKER = {
        mainTalant:{
            name:"Шизострельба",
            discription:"Активный навык. Позволяет стрелять из двух орудий одновременно в течение определённого времени после активации. После включения Сальвадор восстанавливает половину здоровья, получает устойчивость к повреждениям и получает регенерацию здоровья и боеприпасов. Ракеты Не востанавливаються. Перезарядка: 42 секунды"
        },

        tree:{
            Gunlust:[
                [
                    {
                        num:0,
                        //name: "Locked And Loaded",
                        name: "К Стрельбе Готов",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            fireRate:5
                        },
                        //discription:"Reloading your gun gives you +{fireRate}% Fire Rate per level for a short time."
                        discription:"После перезарядки +{fireRate}% Скорость Стрельбы ненадолго повышаеться"
                    },
                    {},
                    {
                        num:1,
                        //name: "Quick Draw",
                        name: "Быстрый Стрелок",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            weaponSwapSpeed:7,
                            critHitDamage:2
                        },
                        //discription:"+{weaponSwapSpeed}% Weapon Swap Speed and +{critHitDamage}% Critical Hit Damage per level."
                        discription:"+{weaponSwapSpeed}% Скорость Смены Оружия и +{critHitDamage}% Критический Урон."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "I'm Your Huckleberry",
                        name: "Я твой Гекльберри",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damageAndReloadSpeed:3
                        },
                        //discription:"+{damageAndReloadSpeed}% Damage and Reload Speed per level with pistols."
                        discription:"+{damageAndReloadSpeed}% Урон и Скорость Перезарядки при использовании пистолета."
                    },
                    {},
                    {
                        num:3,
                        //name: "All I Need is One",
                        name: "Нужно только одно",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:8
                        },
                        //discription:"Swapping weapons causes your next shot fired to deal +{damage}% damage per level."
                        discription:"Следующий после смены оружия выстрел нанесет дополнительно +{damage}% Урон."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Divergent Likeness",
                        name: "Другой облик",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:6,
                            accuracy:6
                        },
                        //discription:"+{damage}% Damage when Gunzerking with two of the same type of guns. +{accuracy}% Accuracy when Gunzerking with two different types of guns."
                        discription:"При Стрельбе С Двух Рук из оружия одного типа повышаеться +{damage}% Урон. Из оружия разных типов повышаеться повышаеться +{accuracy}% Точность."
                    },
                    {
                        num:5,
                        //name: "Auto-Loader",
                        name: "Автоперезарядка",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            damage:8
                        },
                        //discription:"Killing an enemy Instantly Reloads all of the guns that you have equipped that are not currently in your hands. Swapping guns after Auto-Loader has reloaded a gun triggers Locked &amp; Loaded.",
                        discription:"После уничтожения врага, все оружие, за исключением того, что вы держите в руках, немедленно перезаряжается. Если после этого взять в руки другое оружие, немедленно активируется навык 'К Стрельбе Готов'."
                    },
                    {
                        num:6,
                        //name: "Money Shot",
                        name: "В Яблочко",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damageMagazinSize:8,
                            damage:80
                        },
                        //discription:"The last bullet fired from any gun does +{damageMagazinSize}% damage per level per magazine size, up to +{damage}% damage per level.",
                        discription:"Последний патрон в магазине нанесет +{damage}% Урон и еще +{damageMagazinSize}% Урон от размера магазина."
                    }
                ],
                [
                    {
                        num:7,
                        //name: "Lay Waste",
                        name: "Разорение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            fireRate:8,
                            critHitDamage:5
                        },
                        //discription:"Kill Skill. Killing an enemy gives +{fireRate}% Fire Rate and +{critHitDamage}% Critical Hit Damage with Guns per level for a short time.",
                        discription:"Навык убийства. Уничтожение врага повышает +{fireRate}% скорострельность и +{critHitDamage}% Критический Урон при стрельбе из любого вида оружия."
                    },
                    {
                        num:8,
                        //name: "Down Not Out",
                        name: "Непобежденный",
                        lvl:0,
                        maxLvl:1,
                        calc:{},
                        //discription:"You can Gunzerk while in Fight for Your Life.",
                        discription:"Вы можете одновременно использовать навыки 'Борьба За Жизнь' и 'Стрельба с Двух Рук'."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:9,
                        //name: "Keep It Piping Hot",
                        name: "Не Снижая Обороты",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:5,
                            meleeDamage:6,
                            grenadeDamage:5
                        },
                        //discription:"While Gunzerking is in the process of cooling down you gain +{gunDamage}% Gun Damage, +{meleeDamage}% Melee Damage, and +{grenadeDamage}% Grenade Damage per level.",
                        discription:"Пока идет перезарядка навыка 'Стрельба с двух рук', вы наносите больше +{gunDamage}% Урона при Стрельбе и +{meleeDamage}% Урона в Ближнем Бою. Ваши гранаты также наносят больше +{grenadeDamage}% Урона."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:10,
                        //name: "No Kill Like Overkill",
                        name: "Убийство с Запасом",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Any excess damage dealt to an enemy that kills them is transferred to the next enemy fired at.",
                        discription:"Убивая врага, вы повышаете Урон при Стрельбе на величину избыточного урона, который вы только что нанесли."
                    },
                    {}
                ]
            ],
            Rampage:[
                [
                    {
                        num:0,
                        //name: "Inconceivable",
                        name: "Невероятность",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:10
                        },
                        discription:"+{chance}% chance per level for shots not to consume ammo depending on how low your health and shields are.",
                        discription:"С +{chance}% шансом при стрельбе вы не тратите боеприпасы. Чем ниже уровень здоровья и щитов, тем выше вероятность экономии боеприпасов."
                    },
                    {},
                    {
                        num:1,
                        //name: "Filled to the Brim",
                        name: "До Краев",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            magazineCapacity:5,
                            ammunitionCapacity:3
                        },
                        //discription:"+{magazineCapacity}% Magazine Capacity and +{ammunitionCapacity}% Ammunition Capacity per level for all weapon types.",
                        discription:"+{magazineCapacity}% Емкасть Магазина и +{ammunitionCapacity}% Количество Боеприпасов которое вы можете нести."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "All in the Reflexes",
                        name: "Главное Рефлексы",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            reloadSpeed:5,
                            meleeDamage:4
                        },
                        //discription:"+{reloadSpeed}% Reload Speed and +{meleeDamage}% Melee Damage per level.",
                        discription:"Повышает +{reloadSpeed}% Скорость Перезарядки и +{meleeDamage}% Урон в Ближнем бою."
                    },
                    {},
                    {
                        num:3,
                        //name: "Last Longer",
                        name: "Повышенная Живучесть",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            secDuration:3
                        },
                        //discription:"+{secDuration}% seconds Gunzerking duration per level.",
                        discription:"Повышает +{secDuration}% время действия навыка 'Стрельба с двух рук'."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "I'm Ready Already",
                        name: "Я Уже готов",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            cooldownRate:5
                        },
                        //discription:"+{cooldownRate}% Gunzerking Cooldown Rate.",
                        discription:"+{cooldownRate}% Ускоряет восстановление навыка 'Стрельба с двух рук'."
                    },
                    {
                        num:5,
                        //name: "Steady as She Goes",
                        name: "Так Держать",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            recoilReduction:80,
                            chance:30
                        },
                        //discription:"+{recoilReduction}% Recoil Reduction and +{chance}% chance to improve Accuracy on hit when Gunzerking.",
                        discription:"Пока действует навык 'Стрельба с двух рук', уменьшается +{recoilReduction}% Отдача. Кроме того, каждый удачный выстрел имеет +{chance}% Шанс повысить Точность Стрельбы."
                    },
                    {
                        num:6,
                        //name: "5 Shots or 6",
                        name: "5 Или 6 Выстрелов",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:5
                        },
                        //discription:"Grants a +{chance}% chance per level to add an extra round of ammunition when firing instead of expending ammunition.",
                        discription:"Навык убийства. При уничтожении врага возникает +{chance}% вероятность увеличения Боезапаса."
                    }
                ],
                [
                    {
                        num:7,
                        //name: "Yippie Ki Yay",
                        name: "Йиппи-кай-эй!",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            duration:0.6
                        },
                        //discription:"Increases the duration of Gunzerking by +{duration} seconds per level every time an enemy is killed while Gunzerking.",
                        discription:"Уничтожая врага, пока действует навык 'Стрельба с двух рук', вы повышаете +{duration} время действия навыка."
                    },
                    {
                        num:8,
                        //name: "Double Your Fun",
                        name: "Двойное Удовольствие",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Throwing a grenade while Gunzerking throws two grenades instead of one. The second grenade doesn't cost ammo.",
                        discription:"Если действует навык 'Стрельба с двух рук', то вместо одной гранаты вы бросаете 2. Боезапас при этом уменьшается только на одну гранату."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:9,
                        //name: "Get Some",
                        name: "Получай!",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            cooldown:0.6
                        },
                        //discription:"Shooting an enemy decreases Gunzerking cooldown by -{cooldown} seconds per level. Has a cooldown of 3 seconds.",
                        discription:"Каждое попадание ускоряет -{cooldown} восстановление навыка 'Стрельба с Двух Рук'. Не чаще, чем раз в 3 секунды."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:10,
                        //name: "Keep Firing",
                        name: "Стреляй Дальше",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            fireRate:88,
                            reloadSpeed:25
                        },
                        //discription:"While Gunzerking, you gain up to +{fireRate}% Fire Rate and +{reloadSpeed}% Reload Speed depending on how long you hold down the trigger.",
                        discription:"Пока действует навык 'Стрельба с Двух Рук', чем дольше вы жмете на спусковой крючок, тем выше +{fireRate}% скорострельность и +{reloadSpeed}% скорость перезарядки."
                    },
                    {

                    }
                ]
            ],
            Brawn:[
                [
                    {
                        num:0,
                        //name: "Hard to Kill",
                        name: "Живучесть",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            maxHealth:4,
                            regenerate:0.1
                        },
                        //discription:"+{maxHealth}% Maximum Health and +{regenerate}% regenerate of your Maximum Health per second per level.",
                        discription:"Повышает +{maxHealth}% максимальный уровень Здоровья и дает +{regenerate}% восстановление здоровья."
                    },
                    {},
                    {
                        num:1,
                        //name: "Incite",
                        name:"Поджигатель",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            movementSpeed:6,
                            reloadSpeed:5
                        },
                        //discription:"Taking damage gives +{movementSpeed}% Movement Speed and +{reloadSpeed}% Reload Speed per level for a few seconds.",
                        discription:"Получаемый урон на несколько секунд повышает вашу +{movementSpeed}% скорость и +{reloadSpeed}% скорость перезарядки."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Asbestos",
                        name: "Асбест",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            effectDuration:8,
                        },
                        //discription:"-{effectDuration}% Negative Status Effect Duration per level.",
                        discription:"Снижает -{effectDuration}% время действия стихийного урона (огня, коррозии, электричества или шлака) на вас."
                    },
                    {},
                    {
                        num:3,
                        //name: "I'm the Juggernaut",
                        name: "Я - Джагернаут",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damageReduction:4
                        },
                        //discription:"Kill Skill. Killing an enemy gives +{damageReduction}% Damage Reduction for a short time.",
                        discription:"Навык убийства. Убив врага, вы на несколько секунд снижаете +{damageReduction}% получаемый урон."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Ain't Got Time To Bleed",
                        name: "Некогда Истекать Кровью",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regenerate:0.8
                        },
                        //discription:"While Gunzerking you regenerate up to +{regenerate}% of your Maximum Health per second per level depending on how low your health is.",
                        discription:"Во время действия навыка 'Стрельба с двух рук', ваше +{regenerate}% здоровье восстанавливается. Чем ниже уровень здоровья, тем сильнее восстановление."
                    },
                    {
                        num:5,
                        //name: "Fistful of Hurt",
                        name: "Пригоршня Боли",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Melee Override. Throw a heavy punch dealing massive damage and knockback. Has a cooldown of 15 seconds.",
                        discription:"Навык ближнего боя. Нажмите клавишу ближнего боя, чтобы вложить в удар вес всего тела и нанести огромный урон врагу, отбросив его назад. У навыка 'Пригорошня боли' есть время восстановления, в течение которого нажатие клавиши приводит к обычной атаке в ближнем бою."
                    },
                    {
                        num:6,
                        //name: "All Out of Bubblegum",
                        name: "Жвачка Закончилась",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            fireRate:5
                        },
                        //discription:"+{fireRate}% Fire Rate per level when shield is depleted.",
                        discription:"Повышает +{fireRate}% скорострельность, если у ваших щитов закончилась энергия."
                    }
                ],
                [
                    {
                        num:7,
                        //name: "Bus That Can't Slow Down",
                        name: "Неостановимый Автобус",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            movementSpeed:10
                        },
                        //discription:"+{movementSpeed}% Movement Speed per level while Gunzerking.",
                        discription:"Повышает +{movementSpeed}% скорость передвижения во время действия навыка 'Стрельба с двух рук'."
                    },
                    {
                        num:8,
                        //name: "Just Got Real",
                        name: "Реализм",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:8
                        },
                        //discription:"Up to +{gunDamage}% Gun Damage per level depending on how low your health is.",
                        discription:"Повышает +{gunDamage}% урон, который вы наносите при стрельбе. Чем ниже ваш уровень здоровья, тем сильнее эффект."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:9,
                        //name: "Sexual Tyrannosaurus",
                        name: "Получай!",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regeneration:0.4
                        },
                        //discription:"Taking damage gives +{regeneration}% Health Regeneration per level for 5 seconds. This effect does not stack.",
                        discription:"Получаемый урон дает +{regeneration}% восстановление здоровья на 5 секунд. Не накапливается."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:10,
                        //name: "Come At Me, Bro",
                        name: "Стреляй Дальше",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            fireRate:88,
                            reloadSpeed:25
                        },
                        //discription:"While Gunzerking, you can press [Action Skill] to taunt your enemies into attacking you. You instantly heal to Full Health and gain massive damage reduction for a few seconds.",
                        discription:"Усиление активного навыка. Пока действует навык 'Стрельба с двух рук', нажмите клавишу ближнего боя, чтобы раздразнить врагов и немедленно повысить уровень здоровья до максимума. Разозленные враги, скорее всего, нападут на вас, однако в течение следующих нескольких секунд наносимый ими урон будет значительно снижен."
                    },
                    {

                    }
                ]
            ]
        }
    }

    static COMMANDO = {
        mainTalant:{
            //name:"Sabre Turret",
            name:"Турель 'Сабля'",
            //discription:"Action Skill. Deploy a Sabre Turret that automatically fires at enemies. When you're near the Sabre Turret you can reclaim it and refund some of your Cooldown. Cooldown: 42 seconds.",
            discription:"Активный навык. Нажмите кнопку активного навыка, чтобы разместить турель 'Сабля', которая автоматически стреляет во врагов. Если вы находитесь рядом с турелью, нажмите кнопку взаимодействия, чтобы забрать её и немного ускорить восстановление навыка. Восстановление: 42 с."
        },

        tree:{
            Guerilla:[
                [
                    {
                        num:0,
                        //name: "Sentry",
                        name: "Часовой",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            shot:1,
                            duration:2
                        },
                        //discription:"+{shot} shot per burst and +{duration}s duration for Sabre Turret per level."
                        discription:"Увеличивает +{shot} число снарядов в каждом залпе турели «Сабля». Кроме того, увеличивает +{duration} время действия турели."
                    },
                    {},
                    {
                        num:1,
                        //name: "Ready",
                        name: "Готов!",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            reloadSpeed:8
                        },
                        //discription:"+{reloadSpeed}% Reload Speed per level."
                        discription:"Повышает +{reloadSpeed}% скорость перезарядки."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Laser Sight",
                        name: "Лазерный Прицел",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            turretAccuracy:10
                        },
                        //discription:"+{turretAccuracy}% Turret Accuracy per level."
                        discription:"Повышает +{turretAccuracy}% точность стрельбы вашей турели 'Сабля'."
                    },
                    {},
                    {
                        num:3,
                        //name: "Willing",
                        name: "Всегда Готов",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            shieldReachargeRate:15,
                            shieldRechargeDelay:12
                        },
                        //discription:"+{shieldReachargeRate}% Shield Recharge Rate and -{shieldRechargeDelay}% Shield Recharge Delay per level."
                        discription:"Повышает +{shieldReachargeRate}% скорость подзарядки щита и уменьшает -{shieldRechargeDelay}% задержку подзарядки щита."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Onslaught",
                        name: "Штурм",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:6,
                            movementSpeed:12
                        },
                        //discription:"Kill Skill. Killing an enemy gives you +{gunDamage}% Gun Damage and +{movementSpeed}% Movement Speed per level for a short time."
                        discription:"Навык убийства. После уничтожения врага ненадолго повышаются +{gunDamage}% урон при стрельбе и +{movementSpeed}% скорость передвижения."
                    },
                    {
                        num:5,
                        //name: "Scorched Earth",
                        name: "Выжженая Земля",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Adds Multi-Rocket Pods to your Sabre Turret. 22 Rockets per Volley.",
                        discription:"Оснащает вашу турель 'Сабля' установками залпового ракетного огня. 22 Ракеты за залп."
                    },
                    {
                        num:6,
                        //name: "Able",
                        name: "Способный",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regenerate:0.4,
                        },
                        //discription:"Damaging an enemy regenerates +{regenerate}% of your Maximum Health per second per level for 3 seconds.",
                        discription:"Нанося урон врагу, вы некоторое время восстанавливаете +{regenerate}% здоровье. Эффект не суммируется."
                    }
                ],
                [
                    {
                    },
                    {
                        num:7,
                        //name: "Grenadier",
                        name: "Гренадер",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            grenadeCapacity:1
                        },
                        //discription:"+{grenadeCapacity} Grenade Capacity per level.",
                        discription:"Увеличивает +{grenadeCapacity} число гранат, которые вы можете нести."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:8,
                        //name: "Crisis Management",
                        name: "Антикризисное Управление",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:7,
                            meleeDamage:6
                        },
                        //discription:"+{gunDamage}% Gun Damage and +{meleeDamage}% Melee Damage per level when shields are depleted.",
                        discription:"Если уровень щитов на нуле, увеличивается +{meleeDamage}% урон при стрельбе и +{meleeDamage}% урон в ближнем бою."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:9,
                        //name: "Double Up",
                        name: "Удвоение",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Adds a second gun to the Sabre Turret and both guns fire Slag bullets.",
                        discription:"Добавляет 2-е орудие к вашей турели 'Сабля' и меняет в обоих орудиях боеприпасы на Шлаковые. Зашлакованные враги получают больше урона от атак, не связанных со шлаком."
                    },
                    {}
                ]
            ],
            Gunpowder:[
                [
                    {
                        num:0,
                        //name: "Impact",
                        name: "Столкновение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:4,
                            meleeDamage:3
                        },
                        discription:"+{gunDamage}% Gun Damage and +{meleeDamage}% Melee Damage per level.",
                        discription:"Повышает +{gunDamage}% урон от стрельбы и +{meleeDamage}% урон в рукопашном бою."
                    },
                    {},
                    {
                        num:1,
                        //name: "Expertise",
                        name: "Эксперт",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            weaponSwapAimSpeed:14,
                            movementSpeed:7
                        },
                        //discription:"+{weaponSwapAimSpeed}% weapon swap and aim speed per level +{movementSpeed}% movement speed when aiming per level.",
                        discription:"Увеличивает +{weaponSwapAimSpeed}% скорость смены оружия и скорость прицеливания. Кроме того, во время прицеливания повышается +{movementSpeed}% скорость передвижения."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Overload",
                        name: "Перегрузка",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            magazineSize:10,
                        },
                        //discription:"+{magazineSize}% Magazine Size for Assault Rifles.",
                        discription:"Увеличивает +{magazineSize}% размер магазина Штурмовых Винтовок."
                    },
                    {},
                    {
                        num:3,
                        //name: "Metal Storm",
                        name: "град Метала",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            fireRate:12,
                            recoilReduction:15
                        },
                        //discription:"Kill Skill. Killing an enemy gives +{fireRate}% Fire Rate and +{recoilReduction}% Recoil Reduction per level for a short time.",
                        discription:"Навык убийства. Уничтожая врага, вы значительно, хотя и ненадолго повышаете +{fireRate}% скорострельность и снижаете +{recoilReduction}% отдачу."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Steady",
                        name: "Устойчивость",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            recoilReduction:8,
                            grenadeDamage:5,
                            rocketLauncherDamage:4
                        },
                        //discription:"+{recoilReduction}% Recoil Reduction, +{grenadeDamage}% Grenade Damage, and +{rocketLauncherDamage}% Rocket Launcher damage per level.",
                        discription:"Уменьшает +{recoilReduction}% отдачу для всех видов оружия, а также повышает +{grenadeDamage}% урон гранат и +{rocketLauncherDamage}% урон из РПГ."
                    },
                    {
                        num:5,
                        //name: "Longbow Turret",
                        name: "Турель с Телепортом",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            turretDeployRange:10000,
                            turretHealth:110
                        },
                        //discription:"+{turretDeployRange}% Turret Deploy Range, +{turretHealth}% Turret Health.",
                        discription:"Технология телепорта позволяет размещать турель 'Сабля' на большем +{turretDeployRange}% расстоянии. Кроме того, увеличивается +{turretHealth}% прочность турели."
                    },
                    {
                        num:6,
                        //name: "Battlefront",
                        name: "Линия Фронта",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:6
                        },
                        //discription:"+{damage}% Gun, Melee, and Grenade damage per level while turret is deployed.",
                        discription:"Пока действует турель 'Сабля', вы наносите больше +{damage}% урона."
                    }
                ],
                [
                    {
                        num:7,
                        //name: "Duty Calls",
                        name: "По Зову Долга",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:5,
                            fireRate:3
                        },
                        //discription:"+{gunDamage}% Gun Damage and +{fireRate}% Fire Rate with non-elemental guns.",
                        discription:"Увеличивает +{gunDamage}% урон и +{fireRate}% скорострельность оружия, не наносящего стихийного урона."
                    },
                    {
                        num:8,
                        //name: "Do or Die",
                        name: "Добейся или Сдохни",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            damage:10
                        },
                        //discription:"Allows you to throw grenades while in Fight for Your Life. +{damage}% Grenade and Rocket Launcher damage.",
                        discription:"Позволяет бросать гранаты во время 'Борьбы за жизнь'. Кроме того, повышается +{damage}% урон от гранат и РПГ."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:9,
                        //name: "Ranger",
                        name: "Рейнджер",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            number:1
                        },
                        //discription:"+{number}% Gun Damage, Accuracy, Critical Hit Damage, Fire Rate, Magazine Size, Reload Speed, and Maximum Health per level.",
                        discription:"Делает вас лучше +{number}% практически во всем."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:10,
                        //name: "Nuke",
                        name: "Атомная Бомба",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Deploying your Sabre Turret sets off a small Nuclear Blast.",
                        discription:"Размещение турели 'Сабля' приводит к небольшому ядерному взрыву."
                    },
                    {

                    }
                ]
            ],
            Survival:[
                [
                    {
                        num:0,
                        //name: "Healthy",
                        name: "Здоровяк",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            maxHealth:6
                        },
                        //discription:"+{maxHealth}% Maximum Health per level.",
                        discription:"Увеличивает +{maxHealth}% ваш максимальный уровень здоровья."
                    },
                    {},
                    {
                        num:1,
                        //name: "Preparation",
                        name:"Подготовка",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            shieldCapacity:3,
                            regenerate:0.4
                        },
                        //discription:"+{shieldCapacity}% shield capacity per level, regenerate +{regenerate}% health per second per level when shields are full.",
                        discription:"Повышает +{shieldCapacity}% емкость щита. Кроме того, если заряд щита максимален, восстанавливается +{regenerate}% ваш уровень здоровья."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Last Ditch Effort",
                        name: "Последний Рывок",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:8,
                            movementSpeed:14
                        },
                        //discription:"+{gunDamage}% Gun Damage and +{movementSpeed}% Movement Speed per level during Fight For Your Life.",
                        discription:"Во время 'Борьбы за жизнь' повышается +{gunDamage}% урон при стрельбе и +{movementSpeed}% скорость передвижения."
                    },
                    {},
                    {
                        num:3,
                        //name: "Pressure",
                        name: "Давление",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            reloadSpeed:14,
                            shieldRechargeDelay:12
                        },
                        //discription:"Up to +{reloadSpeed}% Reload Speed and -{shieldRechargeDelay}% Shield Recharge Delay per level depending on how low your health is.",
                        discription:"Повышает +{reloadSpeed}% скорость перезарядки и уменьшает -{shieldRechargeDelay}% задержку подзарядки щита. Эффект зависит от уровня здоровья: чем ниже уровень здоровья, тем сильнее эффект."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Forbearance",
                        name: "Терпение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            statusEffect:8,
                            maxHealth:1
                        },
                        //discription:"-{statusEffect}% Status Effect duration on you and +{maxHealth}% Maximum Health per level.",
                        discription:"Снижает -{statusEffect}% время действия урона огнем, коррозией, электричеством и шлаком на вас. Кроме того, увеличивает +{maxHealth}% максимальный уровень здоровья."
                    },
                    {
                        num:5,
                        //name: "Phalanx Shield",
                        name: "Щит 'Фаланга'",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Your Sabre Turret projects a shield that attempts to block enemy ranged fire but lets friendly ranged attacks pass through.",
                        discription:"Ваша турель 'Сабля' окружена защитным силовым полем. Щит пытается блокировать вражеские снаряды, одновременно пропуская снаряды союзников. Щит не мешает врагам двигаться и атаковать в ближнем бою."
                    },
                    {
                        num:6,
                        //name: "Quick Charge",
                        name: "Быстрая Подзарядка",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regenerate:1
                        },
                        //discription:"Kill Skill. Killing an enemy regenerates +{regenerate}% of your shield per second per level for a short time.",
                        discription:"Навык убийства. Уничтожая врага, вы на некоторое время значительно повышаете +{regenerate}% скорость подзарядки щита."
                    }
                ],
                [
                    {
                        num:7,
                        //name: "Resourceful",
                        name: "Находчивость",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            cooldown:5
                        },
                        //discription:"+{cooldown}% Action Skill Cooldown Rate per level.",
                        discription:"Ускоряет +{cooldown}% восстановление навыка 'Турель'."
                    },
                    {
                        num:8,
                        //name: "Mag-Lock",
                        name: "Магнитный замок",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            gunDamage:8
                        },
                        //discription:"Your Sabre Turret can be deployed on walls and ceilings.",
                        discription:"Позволяет размещать турель 'Сабля' на стенах и потолках."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:9,
                        //name: "Grit",
                        name: "Стойкость",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:4
                        },
                        //discription:"You have a +{chance}% chance per level to ignore damage that would otherwise kill you. In addition to not taking damage from the attack, you will also regain half your Maximum health.",
                        discription:"Вы с +{chance}% вероятностью игнорируете урон, который в другом случае привел бы к вашей гибели. Кроме того, вы восстанавливаете здоровье на 50% от максимального уровня."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:10,
                        //name: "Gemini",
                        name: "Близнецы",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Allows you to deploy two Sabre Turrets.",
                        discription:"Позволяет размещать две турели 'Сабля'. После размещения первой турели нажмите клавишу активного навыка еще раз, чтобы разместить вторую."
                    },
                    {

                    }
                ]
            ]
        }
    }

    static ASSASSIN = {
        mainTalant:{
            //name:"Decepti0n",
            name:"0бман",
            //discription:"Action Skill. Create a holographic decoy and vanish for a few seconds. The longer you are invisible the more Damage your next attack deals, but ending invisibility sooner causes your next Deception Cooldown to refresh faster.Cooldown: 15 seconds.Up to 650% Melee Damage. Up to 200% Gun Damage.Up to 250% Gun Critical Hit Damage.",
            discription:"Активный навык. Нажмите кнопку навыка, чтобы создать голограмму-двойника и на несколько секунд исчезнуть. Чем дольше вы сохраняете невидимость, тем больше урона нанесет ваша следующая атака. Чем раньше вы выйдете из невидимости, тем быстрее завершится восстановление навыка. увеличивает на 650% ближний Урон, на 200% Урон оружием и на 250% Критический Урон от оружия."
        },

        tree:{
            Sniping:[
                [
                    {
                        num:0,
                        //name: "HeadSh0t",
                        name: "Выстрел в Голову",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            crit:4
                        },
                        //discription:"+{crit}% Critical Hit Damage per level."
                        discription:"Повышает +{crit}% критический урон."
                    },
                    {},
                    {
                        num:1,
                        //name: "0ptics",
                        name: "0птика",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            zoom:3,
                            aimStreadiness:12
                        },
                        //discription:"+{zoom}% Zoom and +{aimStreadiness}% Aim Steadiness (reduces aim disruption when taking damage) per level."
                        discription:"Повышает +{zoom}% кратное увеличение прицела для всего огнестрельного оружия. Кроме того, +{aimStreadiness}% прицеливание не так сбивается, когда враг наносит вам урон."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Killer",
                        name: "Убийца",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            crit:10,
                            reloadSpeed:15
                        },
                        //discription:"Kill Skill. Killing an enemy gives you +{crit}% Critical Hit Damage and +{reloadSpeed}% Reload Speed per level for a few seconds."
                        discription:"Навык убийства. Уничтожение врага на несколько секунд повышает +{crit}% критический урон и +{reloadSpeed}% скорость перезарядки."
                    },
                    {},
                    {
                        num:3,
                        //name: "Precisi0n",
                        name: "Метк0сть",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            accuracy:5
                        },
                        //discription:"+{accuracy}% Accuracy per level."
                        discription:"Повышает +{accuracy}% точность стрельбы из всех видов оружия."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "0ne Sh0t 0ne Kill",
                        name: "0дин Выстрел 0дин Труп",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:12
                        },
                        //discription:"The first shot from a fully loaded magazine deals +{damage}% Damage per level."
                        discription:"Первый выстрел из оружия с полным боекомплектом наносит +{damage}% дополнительный урон."
                    },
                    {
                        num:5,
                        //name: "B0re",
                        name: "Дрель",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            damage:100
                        },
                        //discription:"Shots pierce through enemies, gaining +{damage}% damage per enemy pierced. Enemy crit locations highlighted in Decepti0n.",
                        discription:"Позволяет простреливать противников насквозь. Пуля наносит +{damage}% огромный урон, если попадает в следующего врага, после прохождения через тело первого. Эффект не работает с ракетами и другими особыми боеприпасами. Во время действия '0бмана' подсвечиваются критические зоны противников."
                    },
                    {
                        num:6,
                        //name: "Vel0city",
                        name: "Ск0р0сть",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            bulletSpeed:20,
                            crit:3,
                            damage:2
                        },
                        //discription:"+{bulletSpeed}% Bullet Speed, +{crit}% Critical Hit Damage, and +{damage}% Gun Damage per level.",
                        discription:"Повышает +{bulletSpeed}% скорость полета пули, +{damage}% урон и +{crit}% критический урон при стрельбе из всех видов оружия."
                    }
                ],
                [
                    {
                    },
                    {
                        num:7,
                        //name: "Kill C0nfirmed",
                        name: "Засчитан0е Убийств0",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            crit:8
                        },
                        //discription:"Up to +{crit}% Critical Hit Damage per level depending on how long you aim down the sights.",
                        discription:"При использовании прицеливания повышается +{crit}% критический урон. Чем дольше вы удерживаете врага на мушке, тем больше урон."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:8,
                        //name: "At 0ne with the Gun",
                        name: "Единение с 0ружием",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            accuracy:25,
                            reloadSpeed:10,
                            magazineSize:1
                        },
                        //discription:"+{accuracy}% Hip-Shot accuracy, +{reloadSpeed}% Reload Speed, and +{magazineSize} Magazine Size with Sniper Rifles per level.",
                        discription:"Значительно повышает +{accuracy}% точность стрельбы из снайперской винтовки при стрельбе без прицеливания. Также увеличивает +{reloadSpeed}% скорость перезарядки и +{magazineSize} размер магазина снайперской винтовки."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:9,
                        //name: "Critical Ascensi0n",
                        name: "Шквал Критики",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            crit:6,
                            damage:5
                        },
                        //discription:"Scoring a Critical Hit with a Sniper Rifle gives you +{crit}% Critical Hit Damage and +{damage}% Damage with Sniper Rifles. Can stack up to 999 times. Stacks begin to decay if you haven't scored a critical hit in a while.",
                        discription:"Если вы нанесли противнику критический урон выстрелом из снайперской винтовки, то при последующих попаданиях из снайперской винтовки увеличивается +{damage}% обычный урон и +{crit}% критический урон. Модификатор увеличивается вплоть до 999 раз и медленно уменьшается, если вы долго не наносите критического урона."
                    },
                    {}
                ]
            ],
            Cunning:[
                [
                    {
                        num:0,
                        //name: "Fast Hands",
                        name: "Быстрые Руки",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            reloadSpeed:5,
                            weaponSwapSpeed:10
                        },
                        //discription:"+{reloadSpeed}% Reload Speed and +{weaponSwapSpeed}% Weapon Swap Speed per level.",
                        discription:"Повышает +{reloadSpeed}% скорость перезарядки оружия и +{weaponSwapSpeed}% скорость смены оружия."
                    },
                    {},
                    {
                        num:1,
                        //name: "C0unter Strike",
                        name: "К0нтрудар",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:50,
                        },
                        //discription:"After getting hit, your next melee attack has a chance to deal +{damage}% damage per level.",
                        discription:"Если вы получили повреждения, ваша следующая атака в ближнем бою может нанести +{damage}% огромный урон врагу."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Fearless",
                        name: "Бесстрашие",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            fireRate:5,
                            damage:3
                        },
                        //discription:"+{fireRate}% Fire Rate and +{damage}% Gun Damage per level when your shield is depleted.",
                        discription:"Если ваш щит выходит из строя, вы наносите +{damage}% больше урона при стрельбе и +{fireRate}% быстрее стреляете."
                    },
                    {},
                    {
                        num:3,
                        //name: "Ambush",
                        name: "Засада",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:4
                        },
                        //discription:"+{damage}% damage per level when attacking enemies from behind or when attacking an enemy who is targeting someone other than you.",
                        discription:"Повышает +{damage}% урон, если вы атакуете врага, который стоит к вам спиной или атакует не вас, а кого-то другого."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Rising Sh0t",
                        name: "Твердая Рука",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:2,
                            meleeDamage:1.8
                        },
                        //discription:"Each successful ranged or melee attack gives you +{gunDamage}% Gun Damage and +{meleeDamage}% Melee Damage per level for a short time. This bonus can stack up to 5 times. Faster weapons can gain stacks more quickly, but slower weapons retain stacks for a longer period of time.",
                        discription:"После каждой успешной атаки при стрельбе или в ближнем бою наносимый вами +{gunDamage}% Урон Оружием и +{meleeDamage}% Ближний Урон на короткое время увеличивается. Эффект суммируется до пяти раз. У оружия с высокой скорострельностью эффект увеличивается быстрее, а у оружия с низкой – дольше сохраняется."
                    },
                    {
                        num:5,
                        //name: "Death Mark",
                        name: "Метка Смерти",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            additionalDamage:80,
                        },
                        //discription:"Dealing melee damage marks a target for 8 seconds. Marked targets take +{additionalDamage}% additional damage from all sources.",
                        discription:"Враг, которому нанесен урон в ближнем бою, на короткое время получает метку смерти. Все виды атак наносят отмеченной цели повышенный +{additionalDamage}% урон. Кроме того, с такой меткой просто нелегко жить."
                    },
                    {
                        num:6,
                        //name: "Unf0rseen",
                        name: "Неожиданность",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:1
                        },
                        //discription:"Your holographic decoy explodes when you become visible again, causing shock damage to nearby enemies. +{damage}% Damage increases per level.",
                        discription:"Когда вы становитесь видимы, ваша голограмма-двойник взрывается, нанося +{damage}% шоковый урон находящимся рядом врагам."
                    }
                ],
                [
                    {
                    },
                    {
                        num:7,
                        //name: "Innervate",
                        name: "В0збуждение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:2,
                            movementSpeed:7,
                            regenerate:0.8
                        },
                        //discription:"While Decepti0n is active you gain +{gunDamage}% Gun Damage, +{movementSpeed}% Movement Speed, and regenerate +{regenerate}% of your Maximum Health per second per level.",
                        discription:"Пока активен навык '0бман', у вас увеличивается +{gunDamage}% урон при стрельбе, +{regenerate}% скорость восстановления здоровья и +{movementSpeed}% скорость передвижения."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:8,
                        //name: "Tw0 Fang",
                        name: "Дв0йн0й Удар",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:6
                        },
                        //discription:"Every time you fire you have a +{chance}% chance per level to fire twice.",
                        discription:"После каждого выстрела возникает +{chance}% вероятность того, что вы сможете выстрелить дважды."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:9,
                        //name: "Death Bl0ss0m",
                        name: "Цветок Смерти",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Action Skill Augment. Throws a handful of Kunai knives. Has a random elemental effect. Does not take character out of Decepti0n. Can be used five times per cooldown. Can apply Death Mark.",
                        discription:"Дополнение для активного навыка. Пока активен навык '0бман', нажмите кнопку активного навыка, чтобы бросить несколько кунаев. Каждый кунай взрывается, нанося урон выбранной случайным образом стихийной атакой. '0бман' не увеличивает урон, наносимый кунаями, вместе с тем кунаи не прерывают действие '0бмана' и, кроме того, могут ставить 'Метку Смерти'."
                    },
                    {

                    }
                ]
            ],
            Bloodshed:[
                [
                    {
                        num:0,
                        //name: "Killing Bl0w",
                        name: "Д0бивающий Удар",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:100
                        },
                        //discription:"+{damage}% Melee Damage per level against enemies with low health.",
                        discription:"Враги с низким уровнем здоровья получают намного больше +{damage}% урона в ближнем бою."
                    },
                    {},
                    {
                        num:1,
                        //name: "Ir0n Hand",
                        name:"Железная Рука",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            number:3
                        },
                        //discription:"+{number}% Melee Damage and Maximum Health per level.",
                        discription:"Увеличивает +{number}% урон в ближнем бою и повышает максимальный уровень здоровья."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Grim",
                        name: "Мрак",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regenerate:0.7,
                            cooldown:1.5
                        },
                        //discription:"Kill Skill. Killing an enemy regenerates +{regenerate}% of your shield per second and gives +{cooldown}% Action Skill cooldown rate per level for a few seconds.",
                        discription:"Навык убийства. Уничтожение врага увеличивает +{regenerate}% скорость подзарядки щитов и +{cooldown}% ускоряет восстановление активного навыка, на несколько секунд."
                    },
                    {},
                    {
                        num:3,
                        //name: "Be Like Water",
                        name: "Будь В0д0й",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damageMelee:6,
                            damageGun:4
                        },
                        //discription:"Shooting an enemy gives +{damageMelee}% damage per level to your next melee attack. Melee Attacks give +{damageGun}% damage per level to your next gun attack.",
                        discription:"Попадание из огнестрельного оружия повышает +{damageMelee}% урон следующей атаки в ближнем бою. Удачная атака в ближнем бою увеличивает +{damageGun}% урон от следующего выстрела."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "F0ll0wthr0ugh",
                        name: "Пр0д0лжение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            movementSpeed:8,
                            gunDamage:6,
                            meleeDamage:8
                        },
                        //discription:"Kill Skill. Killing an enemy gives +{movementSpeed}% Movement Speed, +{gunDamage}% Gun Damage, and +{meleeDamage}% Melee Damage per level for a few seconds.",
                        discription:"Навык убийства. Уничтожение врага на несколько секунд повышает +{movementSpeed}% скорость передвижения, +{meleeDamage}% урон в ближнем бою и +{gunDamage}% урон при стрельбе."
                    },
                    {
                        num:5,
                        //name: "Execute",
                        name: "Казнь",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Melee Override Skill. While Decepti0n is active and a target is under your crosshairs, melee to dash forward a short distance and perform a special melee attack. Has a range of 3 meters.",
                        discription:"Навык ближнего боя. Во время действия навыка '0бман' прицельтесь в противника и нажмите кнопку ближнего боя, чтобы совершить короткий рывок и провести особую атаку в ближнем бою, нанося ему огромный урон."
                    },
                    {
                        num:6,
                        //name: "Backstab",
                        name: "Удар в Спину",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:8
                        },
                        //discription:"Your melee attacks deal +{damage}% damage per level when hitting an enemy in the back, dealing massive damage.",
                        discription:"Атаки в ближнем бою наносят дополнительный +{damage}% урон при ударах в спину."
                    }
                ],
                [
                    {
                    },
                    {
                        num:7,
                        //name: "Resurgence",
                        name: "В0стнанн0вление",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            restores:4
                        },
                        //discription:"Killing an enemy with a melee attack restores up to +{restores}% of your health per level depending on how low your health is.",
                        discription:"Уничтожение врага в ближнем бою восстанавливает +{restores}% здоровье. Чем ниже уровень здоровья, тем сильнее он повышается."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:8,
                        //name: "Like The Wind",
                        name: "Сл0вн0 Ветер",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:3
                        },
                        //discription:"+{damage}% Gun and Melee Damage per level when moving.",
                        discription:"В движении герой наносит больше +{damage}% урона как в ближнем бою, так и при стрельбе."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:9,
                        //name: "Many Must Fall",
                        name: "Мн0гие Д0лжны Умереть",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Killing an enemy with a Melee Attack during Decepti0n deploys an additional holographic decoy and extends the duration of Decepti0n instead of ending it.",
                        discription:"Если активен навык '0бман', убийство врага в ближнем бою вызывает появление еще одной голограммы-двойника, заново включает невидимость, а также продлевает время действия '0бмана'. Это можно повторять несколько раз подряд."
                    },
                    {

                    }
                ]
            ]
        }
    }

    static SIREN = {
        mainTalant:{
            //name:"Phaselock",
            name:"Захват",
            //discription:"Action Skill. Lock an enemy in another dimension, preventing him from fighting back for a short while. Some enemies cannot be Phaselocked and instead instantly take damage. Cooldown: 13 seconds.",
            discription:"Активный навык. Захват позволяет поднять в воздух, обездвижить и сделать уязвимым к атакам практически любого противника. Некоторые противники не могут быть захвачены, и вместо этого получают урон."
        },

        tree:{
            Motion:[
                [
                    {
                        num:0,
                        //name: "Ward",
                        name: "Страж",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            shieldCapacity:5,
                            shieldRechargeDelay:8
                        },
                        //discription:"+{shieldCapacity}% Shield Capacity and -{shieldRechargeDelay}% Shield Recharge Delay per level."
                        discription:"Повышает +{shieldCapacity}% емкость щита и уменьшает -{shieldRechargeDelay}% задержку подзарядки щита."
                    },
                    {},
                    {
                        num:1,
                        //name: "Accelerate",
                        name: "Ускорение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:3,
                            bulletSpeed:4
                        },
                        //discription:"+{gunDamage}% Gun Damage and +{bulletSpeed}% Bullet Speed per level."
                        discription:"Повышает +{gunDamage}% урон и +{bulletSpeed}% скорость пули для всех видов огнестрельного оружия."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Suspension",
                        name: "Приостановка",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            duration:0.5,
                        },
                        //discription:"Increases the duration of Phaselock by +{duration} s per level."
                        discription:"Увеличивает +{duration} сек. продолжительность 'Захвата'."
                    },
                    {},
                    {
                        num:3,
                        //name: "Kinetic Reflection",
                        name: "Кинетическое Отражение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            reducingDamage:10,
                            dealingDamage:20
                        },
                        //discription:"Kill Skill. Killing an enemy causes you to deflect bullets against nearby enemies, reducing damage to you by {reducingDamage}% and dealing {dealingDamage}% damage per level for a short time."
                        discription:"Навык убийства. Убив врага, вы приобретаете способность отражать летящие в вас пули обратно во врагов. -{reducingDamage}% полученый урон от пули, {dealingDamage}% урон при отражении."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Fleet",
                        name: "Стремительность",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            movementSpeed:10
                        },
                        //discription:"Your Movement Speed increases by {movementSpeed}% per level while your shields are depleted."
                        discription:"Когда уровень щита уменьшается до нуля, ваша {movementSpeed}% скорость передвижения повышается."
                    },
                    {
                        num:5,
                        //name: "Converge",
                        name: "Конвергенция",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Your Phaselock ability now also pulls nearby enemies toward the original target.",
                        discription:"Усиление активного навыка. Применяя захват, вы теперь также подтягиваете находящихся рядом врагов к цели и наносите им небольшой урон."
                    },
                    {
                        num:6,
                        //name: "Inertia",
                        name: "Инерция",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regenerate:0.8,
                            reloadSpeed:10,
                        },
                        //discription:"Kill Skill. Killing an enemy regenerates {regenerate}% of your Shield per second and increases your Reload Speed by +{reloadSpeed}% per level for a short time.",
                        discription:"Уничтожение врага приводит к быстрому восстановлению {regenerate}% уровня щитов и на несколько секунд повышает +{reloadSpeed}% скорость перезарядки."
                    }
                ],
                [
                    {
                    },
                    {
                        num:7,
                        //name: "Quicken",
                        name: "Созревание",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            cooldown:6
                        },
                        //discription:"Increases the Cooldown Rate of your Phaselock's Ability by {cooldown}% per level.",
                        discription:"Ускоряет {cooldown}% восстановление навыка 'Захват'."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:8,
                        //name: "Sub-Sequence",
                        name: "Цикл",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:20,
                        },
                        //discription:"When an enemy dies under the effects of Phaselock, there is a chance for your Phaselock to seek out and affect another target {chance}% chance per level.",
                        discription:"Если враг, находящийся в 'Захвате', погибает, появляется {chance}% вероятность того, что в захват попадет другая цель."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:9,
                        //name: "Thoughtlock",
                        name: "Мыслезахват",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            crit:6,
                            damage:5
                        },
                        //discription:"Phaselock causes enemies to switch allegiance and fight amongst themselves. Additionally, Phaselock's cooldown and duration are increased (3s and 4s respectively).",
                        discription:"Изменение активного навыка. 'Захват' заставляет противника напасть на своих союзников. Кроме того, продолжительность захвата увеличивается, а восстановление навыка замедляется (4s и 3s соответственно)."
                    },
                    {}
                ]
            ],
            Harmony:[
                [
                    {
                        num:0,
                        //name: "Mind's Eye",
                        name: "Третий глаз",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            meleeDamage:6,
                            critHitDamage:5
                        },
                        //discription:"+{critHitDamage}% Critical Hit Damage and +{meleeDamage}% Melee Damage per level.",
                        discription:"Повышает +{critHitDamage}% критический урон и +{meleeDamage}% урон в ближнем бою."
                    },
                    {},
                    {
                        num:1,
                        //name: "Sweet Release",
                        name: "Чудесный Подарок",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            lifeOrb:1,
                        },
                        //discription:"Killing an enemy who is currently Phaselocked creates {lifeOrb} Life Orb per level which automatically seeks out and heals you and your friends. The healing is stronger when you or your friend's health is low (up to 15% per Orb).",
                        discription:"Если враг, находящийся в захвате, погибает, появляются {lifeOrb} шары здоровья, которые автоматически исцеляют вас и ваших друзей. Чем ниже уровень здоровья, тем сильнее эффект."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Restoration",
                        name: "Подкрепление",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            maxHealth:3,
                            heal:6
                        },
                        //discription:"+{maxHealth}% Maximum Health and attack allies to heal them for +{heal}% of the attack damage per level.",
                        discription:"Вы исцеляете других игроков, стреляя в них +{heal}% от урона. Навык также увеличивает +{maxHealth}% ваш максимальный уровень здоровья."
                    },
                    {},
                    {
                        num:3,
                        //name: "Wreck",
                        name: "Катастрофа",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            fireRate:10,
                            damage:6
                        },
                        //discription:"+{fireRate}% Fire Rate and +{damage}% Damage with guns per level while you have an enemy Phaselocked.",
                        discription:"Пока вы держите врага в 'Захвате', у всех видов огнестрельного оружия повышается +{damage}% урон и +{fireRate}% скорострельность."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Elated",
                        name: "Ликование",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regenerate:1,
                        },
                        //discription:"You and your friends regenerate +{regenerate}% health per second per level while you have an enemy Phaselocked.",
                        discription:"Пока враг находится в 'Захвате', +{regenerate}% уровень здоровья у вас и ваших союзников восстанавливается."
                    },
                    {
                        num:5,
                        //name: "Res",
                        name: "Воскрешение",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"You can instantly revive a friend in Fight for Your Life by using Phaselock on him/her.",
                        discription:"Вы можете мгновенно поднять на ноги друга в состоянии 'Борьбы за жизнь', взяв его в 'Захват'."
                    },
                    {
                        num:6,
                        //name: "Recompense",
                        name: "Компенсация",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:10
                        },
                        //discription:"Taking Health damage has a {chance}% chance per level of dealing an equal amount of damage to your attacker.",
                        discription:"Если ваш уровень здоровья падает, есть {chance}% шанс, что атакующий может получить столько же урона, сколько и наносит."
                    }
                ],
                [
                    {
                    },
                    {
                        num:7,
                        //name: "Sustenance",
                        name: "Поддержка",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regenerate:0.4
                        },
                        //discription:"Regenerate up to {regenerate}% of your missing Health per second per level. The lower your health the more powerful the regeneration.",
                        discription:"Уровень здоровья {regenerate}% постоянно восстанавливается. Чем ниже ваш уровень здоровья, тем сильнее эффект."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:8,
                        //name: "Life Tap",
                        name: "Линия Жизни",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            lifeSteal:1.2
                        },
                        //discription:"Kill Skill. Killing an enemy gives you +{lifeSteal}% Life Steal per level for a short while.",
                        discription:"Навык убийства. Убив врага, вы крадете +{lifeSteal}% жизненную энергию у всех врагов, которым вы наносите урон. Эффект длится недолго."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:9,
                        //name: "Scorn",
                        name: "Осуждение",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Melee Override. Press [melee] to throw an Orb of Slag that constantly damages enemies near it. This ability has a 18 second cooldown. Pressing [melee] when Scorn is on cooldown will perform a regular melee attack.",
                        discription:"Навык ближнего боя. Нажмите клавишу ближнего боя, чтобы бросить Заряд Шлака, мгновенно наносящий урон врагам, что находятся рядом с ним. У навыка есть время восстановления, во время которого нажатие клавиши ближнего боя приводит к обычной атаке в ближнем бою."
                    },
                    {

                    }
                ]
            ],
            Cataclysm:[
                [
                    {
                        num:0,
                        //name: "Flicker",
                        name: "Мерцание",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            elementalEffectChance:6
                        },
                        //discription:"+{elementalEffectChance}% Elemental Effect Chance per level.",
                        discription:"Повышает +{elementalEffectChance}% вероятность нанести временный урон огнем, электричеством, коррозией или шлаком при стрельбе из соответствующего оружия."
                    },
                    {},
                    {
                        num:1,
                        //name: "Foresight",
                        name:"Предвидение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            magazineSize:4,
                            reloadSpeed:5
                        },
                        //discription:"Increases Magazine Size and Reload Speed with all weapon types. +{magazineSize}% Magazine Size and +{reloadSpeed}% Reload Speed per level.",
                        discription:"Увеличивает +{magazineSize}% емкость магазина и +{reloadSpeed}% скорость перезарядки для всех видов оружия."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Immolate",
                        name: "Жертвоприношение",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:10,
                        },
                        //discription:"Adds +{damage}% Damage per level as Fire Damage to all shots fired when in Fight For Your Life.",
                        discription:"Во время 'Борьбы за жизнь' все выстрелы наносят +{damage}% дополнительный урон огнем. Численное значение урона зависит от урона выбранного вами оружия."
                    },
                    {},
                    {
                        num:3,
                        //name: "Helios",
                        name: "Гелиос",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            heliosDamageRank:1,
                        },
                        //discription:"Phaselocking an enemy causes a fiery explosion, damaging all nearby enemies. {heliosDamageRank} Helios Damage Rank per level.",
                        discription:"Захват вызывает огненный взрыв, который наносит урон всем находящимся рядом врагам."
                    }
                ],
                [
                    {
                        num:4,
                        //name: "Chain Reaction",
                        name: "Цепная Реакция",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:8,
                        },
                        //discription:"While you have an enemy Phaselocked all of your bullets that hit enemies have a {chance}% chance per level to ricochet and hit another nearby enemy.",
                        discription:"Если вы взяли врага в 'Захват', то все ваши пули, которые попадают в цель, имеют {chance}% шанс срикошетить в находящегося рядом врага. Эффект распространяется только на пули."
                    },
                    {
                        num:5,
                        //name: "Cloud Kill",
                        name: "Кислотное Облако",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Shooting an enemy creates a lingering Acid Cloud, which lasts for 5 seconds, dealing constant Corrosive Damage to enemies who touch it. Only one Acid Cloud can be active at a time.",
                        discription:"Удачный выстрел создает кислотное облако, которое непрерывно наносит урон коррозией врагам, которые оказались в нем или рядом с ним."
                    },
                    {
                        num:6,
                        //name: "Backdraft",
                        name: "Тяга",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            backdraftDamageRank:1
                        },
                        //discription:"Your melee attacks deal additional Fire Damage. Also, when your shields become depleted you create a fiery explosion, damaging nearby enemies. Your shields must fully recharge between explosions. {backdraftDamageRank} Backdraft Damage Rank per level.",
                        discription:"Ваши атаки в ближнем бою наносят дополнительный урон огнем. Кроме того, если уровень щита на нуле, вы можете создать огненный взрыв, который наносит урон находящимся рядом врагам. Между взрывами щиты должны полностью зарядиться."
                    }
                ],
                [
                    {
                    },
                    {
                        num:7,
                        //name: "Reaper",
                        name: "Жнец",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            gunDamage:8
                        },
                        //discription:"You deal +{gunDamage}% increased Gun Damage per level to any enemy who has more than 50% of his health remaining.",
                        discription:"Вы наносите дополнительный +{gunDamage}% урон при стрельбе по врагам, запас здоровья которых более 50%."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:8,
                        //name: "Blight Phoenix",
                        name: "Чумной Феникс",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                        },
                        //discription:"Kill Skill. Killing an enemy causes you to deal constant Fire and Corrosive Damage to nearby enemies for a short time. The damage is based on your Level and the Level of the Blight Phoenix.",
                        discription:"Навык убийства. После уничтожения врага вы в течение некоторого времени постоянно наносите находящимся рядом врагам урон огнем и коррозией. Урон зависит от вашего уровня и уровня навыка 'Чумной Феникс'."
                    },
                    {

                    }
                ],
                [
                    {
            
                    },
                    {
                        num:9,
                        //name: "Ruin",
                        name: "Поражение",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Action Skill Augmentation. Phaselock now slags, corrodes and electrocutes all nearby enemies.",
                        discription:"Усиление активного навыка. 'Захват' теперь наносит урон шлаком, электричеством и коррозией всем находящимся рядом врагам."
                    },
                    {

                    }
                ]
            ]
        }
    }

    static MECHROMANCER = {
        mainTalant:{
            //name:"Summon Deathtrap",
            name:"Жестокус",
            //discription:"Action Skill. Summon Deathtrap to fight for you. Cooldown: 60 seconds",
            discription:"Активный навык. Вызов боевого робота, наносящего урон противникам когтями и молниями. Перезарядка 60 сек."
        },

        tree:{
            BestFriendsForever:
            [
                [
                    {
                        num:0,
                        //name: "Close Enough",
                        name: "Трудно Промахнуться",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:10
                        },
                        //discription:"Your bullets that hit walls or other objects have a +{chance}% chance per level to ricochet toward a nearby enemy dealing 50% damage."
                        discription:"Ваши пули, попадая в стены и другие предметы имеют +{chance}% шанс отскочить в сторону ближайшего противника. Срикошетившие пули наносят меньше повреждений."
                    },
                    {},
                    {
                        num:1,
                        //name: "Cooking Up Trouble",
                        name: "101 Способ Заварить Кашу",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            regenerate:0.4
                        },
                        //discription:"While your gun's magazine is full you regenerate +{regenerate}% per level of maximum health per second."
                        discription:"Если ваш магазин полон, +{regenerate}% ваш запас здоровья восстанавливается."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Fancy Mathematics",
                        name: "Занимательная Математика",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            shieldRechargeDelay:14,
                            shieldReachargeRate:12
                        },
                        //discription:"Improves shield recharge delay (up to -{shieldRechargeDelay}% per level) and shield recharge rate (up to +{shieldRechargeRate}% per level) based on how low your health is. The lower your health the greater the bonuses."
                        discription:"Уменьшает -{shieldRechargeDelay}% задержку подзарядки щита и увеличивает +{shieldRechargeRate}% скорость подзарядки щита – в зависимости от того, насколько истощен ваш запас здоровья. Чем меньше осталось здоровья, тем сильнее бонусы."
                    },
                    {
                        num:3,
                        //name: "Buck Up",
                        name: "Поживей",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Deathtrap Ability. Deathtrap restores the shields of one ally by 30%."
                        discription:"Жестокус восстанавливает щиты союзникам."
                    },
                    {
                        num:4,
                        //name: "The Better Half",
                        name: "Нужно только одно",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            fireRate:12
                        },
                        //discription:"When your magazine is at least half empty you gain fire rate +{fireRate}% per level."
                        discription:"Когда магазин пустеет наполовину, у оружия повышается +{fireRate}% скорострельность."
                    }
                ],
                [
                    {
                        num:5,
                        //name: "Potent as a Pony",
                        name: "Выносливость как у Пони",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            maxHealth:4,
                            deathrap:2
                        },
                        //discription:"Increases maximum health for you (+{maxHealth}% per level) and Deathtrap (+{deathrap}% per level)."
                        discription:"Увеличивает +{maxHealth}% максимальный уровень здоровья у вас и +{deathrap}% 'Жестокуса'."
                    },
                    {
                        num:6,
                        //name: "Upshot Robot",
                        name: "Робот в Ударе",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"While Deathtrap is active, if you or Deathtrap kill an enemy it increases Deathtrap's duration by 5 seconds and grants both of you a 4% stackable melee damage bonus. Bonuses are lost when Deathtrap goes away.",
                        discription:"Если 'Жестокус' или вы сами убиваете противника во время действия 'Жестокуса', продлевается время действия Жестокуса, и вы оба получаете бонус к урону в ближнем бою, причем эти бонусы могут суммироваться. Когда действие 'Жестокуса' прекращается, бонусы пропадают."
                    },
                    {
                        num:7,
                        //name: "Unstoppable Force",
                        name: "Неудержимая Сила",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            movementSpeed:7,
                            regenerate:0.8
                        },
                        //discription:"Killing an enemy grants you {movementSpeed}% per level movement speed and {regeneration}% shield regeneration per level for a short while.",
                        discription:"При убийстве противника у вас на короткий срок повышается {movementSpeed}% скорость передвижения и начинает {regeneration}% восстанавливаться щит."
                    }
                ],
                [
                    {
                        num:8,
                        //name: "Explosive Clap",
                        name: "Взрывной Хлопок",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Deathtrap Ability. Deathtrap causes an explosion in front of him, dealing explosive damage to all nearby enemies.",
                        discription:"Жестокус вызывает перед собой взрыв, наносящий урон всем противникам поблизости."
                    },
                    {
                        num:9,
                        //name: "Made of Sterner Stuff",
                        name: "Баба с Яйцами",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damageReduction:1,
                            meleeDamage:3
                        },
                        //discription:"You and Deathtrap gain +{damageReduction}% per level damage reduction against all damage types. Deathtrap gains +{meleeDamage}% per level melee damage.",
                        discription:"Вы и Жестокус получаете меньше +{damageReduction}% урона от любых типов оружия. Также Жестокус наносит дополнительный +{meleeDamage}% урон в ближнем бою."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:10,
                        //name: "20% Cooler",
                        name: "На 20% Круче",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            cooldown:6
                        },
                        //discription:"Increases the cooldown rate of your action skill by +{cooldown}% per level.",
                        discription:"На +{cooldown}% ускоряет восстановление навыка 'Вызов Жестокуса'."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:11,
                        //name: "Sharing is Caring",
                        name: "Не Забывайте Делиться",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Grants a copy of your shield to Deathtrap.",
                        discription:"'Жестокус' получает копию вашего щита."
                    },
                    {}
                ]
            ],
            LittleBigTrouble:
            [
                [
                    {
                        num:0,
                        //name: "More Pep",
                        name: "Больше Енергии",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            burn:2,
                            electrocute:4,
                            corrode:2,
                            slag:2
                        },
                        //discription:"Increases your chances of applying Burn (+{burn}% per level), Electrocute ( +{electrocute}% per level), Corrode (+{corrode}% per level, and Slag ( +{slag}% per level) Status Effects."
                        discription:"Повышает ваши шансы нанести противнику временный стихийный урон +{burn}% огнем, +{electrocute}% электричеством, +{corrode}% коррозией и +{slag}% шлаком."
                    },
                    {},
                    {
                        num:1,
                        //name: "Myelin",
                        name: "Миелин",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            resistance:6,
                            shieldCapacity:3
                        },
                        //discription:"Grants you +{resistance}% per level Resistance to Shock Damage. Also increases your Shield Capacity by +{shieldCapacity}% per level."
                        discription:"Наделяет вас +{resistance}% сопротивляемостью к урону от электричества. Также увеличивает +{shieldCapacity}% емкость щита."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Shock Storm",
                        name: "Электрический Шторм",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            rank:1
                        },
                        //discription:"Killing an enemy with a Critical Hit causes an Electric Storm, dealing Rank (+{rank} per level) Electrocute Damage to nearby enemies. Electrical Storms are also caused by Deathtrap whenever he kills an enemy."
                        discription:"При убийстве противника с помощью критического попадания возникает 'электрический шторм', наносящий всем ближайшим противникам урон от электричества. Также 'электрический шторм' возникает, когда противника убивает Жестокус."
                    },
                    {
                        num:3,
                        //name: "The Stare",
                        name: "Убийственный Вгляд",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Deathtrap Ability. Deathtrap fires a laser beam and sweeps it across the battlefield, dealing Burn Damage and possibly Igniting enemies."
                        discription:"Способность Жестокуса. Жестокус выпускает лазерный луч и проводит им по полю боя, нанося противникам урон от огня и с некоторой вероятностью поджигая их."
                    },
                    {
                        num:4,
                        //name: "Strength of Five Gorillas",
                        name: "Сила Пяти Горил",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            meleeDamage:3
                        },
                        //discription:"Increases Melee Damage for you and Deathtrap by +{meleeDamage}% per level."
                        discription:"У вас и у Жестокуса повышается +{meleeDamage}% урон в ближнем бою."
                    }
                ],
                [
                    {
                        num:5,
                        //name: "Electrical Burn",
                        name: "Електрический Ожог",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:4
                        },
                        //discription:"When your Electrocute Status Effects deal damage to enemies, there is a +{chance}% (per level) chance they will burst into flames and take Burn Damage. The amount of Burn Damage is based on the Electrocute damage dealt."
                        discription:"Когда вы наносите противникам временный урон от электричества, есть +{chance}% вероятность, что они вспыхнут и получат урон от огня. Количество урона от огня зависит от того, сколько урона от электричества они получили."
                    },
                    {
                        num:6,
                        //name: "Shock and 'AAAGGGGHHH!'",
                        name: "Шок и 'АААААЙ!'",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Reloading your gun causes an Electrical Explosion, damaging nearby enemies.",
                        discription:"При перезарядке возникает электрический взрыв, наносящий урон всем противникам поблизости."
                    },
                    {
                        num:7,
                        //name: "Evil Enchantress",
                        name: "Злая Колдунья",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            damage:6
                        },
                        //discription:"Kill Skill. Killing an enemy increases by +{damage}% per level the Damage that your Burn, Electrocute, and Corrode status effects deal for a short period of time.",
                        discription:"При убийстве противника на короткий срок повышается временный +{damage}% урон от огня, электричества и коррозии."
                    }
                ],
                [
                    {
                        num:8,
                        //name: "One Two Boom",
                        name: "Рас-Два Бум",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Deathtrap Ability. Deathtrap shoots out an orb of energy at an enemy. If you shoot the orb it will explode, dealing massive Shock Damage to nearby enemies.",
                        discription:"Жестокус выстреливает в противника энергетической сферой. Если выстрелить в сферу, она взорвется и нанесет всем противникам поблизости огромный урон электричеством."
                    },
                    {
                        num:9,
                        //name: "Wires Don't Talk",
                        name: "Провода Безмолвны",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                           damage:3
                        },
                        //discription:"Increases all Shock and Electrocute Damage that you inflict by +{damage}% per level.",
                        discription:"Повышает +{damage}% наносимый вами урон от электричества."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:10,
                        //name: "Interspersed Outburst",
                        name: "Сдерживаемый Гнев",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            rank:1
                        },
                        //discription:"Not shooting an enemy for a short time grants you a stack of Interspersed Outburst (up to 5 stacks). The next time you shoot an enemy, all stacks of Interspersed Outburst are consumed and you deal Rank ({rank} per level) Slag Damage. The more stacks are consumed, the greater the chance of slagging the target.",
                        discription:"Если в течение короткого срока не стрелять в противников, вы получаете уровень сдерживаемого гнева. Когда вы в следующий раз выстрелите, все уровни сдерживаемого гнева израсходуются и вы нанесете противнику дополнительный урон от взрыва – чем больше уровней, тем больше урон. Максимальное количество уровней сдерживаемого гнева: 5."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:11,
                        //name: "Make it Sparkle",
                        name: "Яркая Вспышка",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Shooting Deathtrap with an elemental weapon charges him with that element, causing his melee attacks to deal additional damage of that element.",
                        discription:"После попадания в Жестокуса из стихийного оружия он заряжается силой этой стихии и при атаке в ближнем бою наносит дополнительный стихийный урон."
                    },
                    {}
                ]
            ],
            OrderedChaos:
            [
                [
                    {
                        num:0,
                        //name: "Smaller, Lighter, Faster",
                        name: "Меньше, Легче, Быстрее",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            reloadSpeed:6,
                            magazineSize:1
                        },
                        //discription:"Increases you reload speed +{reloadSpeed}% per level but decreases your magazine size -{magazinSize}% per level."
                        discription:"Повышает +{reloadSpeed}% скорость перезарядки, но уменьшает -{magazinSize}% размер магазина."
                    },
                    {},
                    {
                        num:1,
                        //name: "Anarchy",
                        name: "Анархия",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Killing an enemy or fully emptying your gun's magazine while in combat grants you a stack of Anarchy (up to 150 stacks). For every stack of Anarchy you have, you gain +1.75% bonus gun damage, but your accuracy is decreased -1.75%. Prematurely reloading your guns removes all stacks of Anarchy. Anarchy stacks are quickly lost while in 'Fight for Your Life.'"
                        discription:"При убийстве противника или при полном опустошении магазина вы получаете уровень анархии. С каждым уровнем анархии у вас повышается урон при стрельбе и в ближнем бою, но при этом снижается меткость. При ручной перезарядке оружия все уровни анархии пропадают. В режиме 'Борьбы за Жизнь' уровни анархии быстро исчезают."
                    }
                ],
                [
                    {
                        num:2,
                        //name: "Preshrunk Cyberpunk",
                        name: "Наномикрокиберпанк",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            number:50
                        },
                        //discription:"Increases the maximum number of Anarchy stacks you can have by +{number} per level."
                        discription:"На +{number} увеличивает максимально возможное число уровней анархии."
                    },
                    {
                        num:3,
                        //name: "Robot Rampage",
                        name: "Робот в Ярости",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Deathtrap Ability. Deathtrap lashes out with a flurry of attacks."
                        discription:"Жестокус обрушивает на противников шквал ударов когтями."
                    },
                    {
                        num:4,
                        //name: "Blood Soaked Shields",
                        name: "Окровавленные Щиты",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            restore:20,
                            lose:1
                        },
                        //discription:"Killing an enemy immediately restores +{restore}% of your shields per level, but you lose {lose}% of your current health per level."
                        discription:"При убийстве противника у вас мгновенно +{restore}% восполняется часть заряда щита, но при этом вы теряете {lose}% часть запаса здоровья."
                    }
                ],
                [
                    {
                        num:5,
                        //name: "Annoyed Android",
                        name: "Рассерженый Андроид",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            movementSpeed:7
                        },
                        //discription:"Increases the movement speed of Deathtrap by +{movementSpeed}% per level."
                        discription:"Увеличивает +{movementSpeed}% скорость передвижения Жестокуса."
                    },
                    {
                        num:6,
                        //name: "Discord",
                        name: "Разлад",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                            accuracy:65,
                            fireRate:25,
                            regeneration:3
                        },
                        //discription:"Prematurely reloading activates Discord granting you +{accuracy}% accuracy, +{fireRate}% fire rate, and +{regeneration}% per second health regeneration. You constantly lose Anarchy stacks while Discord is active. Discord can be shut off by prematurely reloading again.",
                        discription:"При ручной перезарядке активируется навык Разлад, и вы получаете прибавку к +{accuracy}% меткости, +{fireRate}% скорострельности и +{regeneration}% скорости восстановления здоровья. Пока действует Разлад, вы теряете уровни анархии. Чтобы отключить Разлад, нужно выполнить перезарядку вручную еще раз."
                    },
                    {
                        num:7,
                        //name: "Typecast Iconoclast",
                        name: "Типовой Иконоборец",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                            chance:6
                        },
                        //discription:"Whenever you get a stack of Anarchy there is a {chance}% per level chance you get an additional stack.",
                        discription:"Каждый раз при получении уровня Анархии у вас появляется {chance}% шанс получить еще один дополнительный уровень."
                    }
                ],
                [
                    {
                        num:8,
                        //name: "Rational Anarchist",
                        name: "Рациональный Анархист",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"If you have 0 stacks of Anarchy, then the next time you would gain an Anarchy stack you instead gain 25.",
                        discription:"Если у вас нет уровней анархии, то в следующий раз вместо одного уровня вы получите сразу 25."
                    },
                    {
                        num:9,
                        //name: "Death From Above",
                        name: "Крылатая Смерть",
                        lvl:0,
                        maxLvl:5,
                        calc:{
                           staks:1,
                           rank:1
                        },
                        //discription:"Shooting an enemy while in midair consumes {stacks} stacks of Anarchy (1 per level) and causes a Rank ({rank} per level) Digi-splosion, damaging nearby enemies.",
                        discription:"При стрельбе или атаке в ближнем бою в прыжке у вас тратятся все уровни анархии и возникает цифровзрыв, повреждающий ближайших противников. Чем больше уровней анархии поглощается, тем больше урон от взрыва."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:10,
                        //name: "The Nth Degree",
                        name: "Никто не Убежит",
                        lvl:0,
                        maxLvl:5,
                        static:{
                            number:10
                        },
                        calc:{
                            number:-1,
                        },
                        //discription:"Every {number}  per level bullets that hits an enemy, one of them will ricochet toward another nearby enemy.",
                        discription:"Каждая {number}-ная пуля, попадающая в противника, рикошетит в следующего врага."
                    },
                    {}
                ],
                [
                    {},
                    {
                        num:11,
                        //name: "With Claws",
                        name: "Когти",
                        lvl:0,
                        maxLvl:1,
                        calc:{
                        },
                        //discription:"Melee Override Skill. While you have a stack of Anarchy, melee to digistruct claws and swipe twice at an enemy, dealing +0.6% melee damage per Anarchy stack and restoring health. The lower your health the more health you gain. This attack consumes an Anarchy stack.",
                        discription:"Если у вас есть уровень анархии, нажмите клавишу ближнего боя, чтобы выпустить когти и атаковать противника двойным ударом. Количество нанесенного урона зависит от того, сколько у вас уровней анархии. При этом у вас также восстанавливается здоровье: чем ниже ваш запас здоровья, тем сильнее он восполнится. Данная атака поглощает один уровень анархии."
                    },
                    {}
                ]
            ]
        }
    }
}