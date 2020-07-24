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
}