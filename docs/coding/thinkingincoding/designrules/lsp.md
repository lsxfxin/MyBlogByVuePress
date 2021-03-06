# 里氏替换原则


## 里氏替换原则（Liskov Substitution Principle，LSP）
### 定义
- 由麻省理工学院计算机科学实验室的里斯科夫（Liskov）女士在 1987 年的
“面向对象技术的高峰会议”（OOPSLA）上发表的一篇文章《数据抽象和层次》
里提出来的，她提出：继承必须确保超类所拥有的性质在子类中仍然成立。

  
### 核心思想
- 里氏替换原则主要阐述了有关继承的一些原则，也就是什么时候应该使用继承，
什么时候不应该使用继承，以及其中蕴含的原理。里氏替换原是继承复用的基础，
它反映了基类与子类之间的关系，是对开闭原则的补充，是对实现抽象化的具体步骤的规范。
- 一个软件实体如果适用于父类，那么一定适用于其子类，所有引用父类的地方必须能透明的
使用其子类的对象，子类对象能够替换父类对象，而程序逻辑不变。
- 引申含义为：子类可以扩展父类的功能，但不能改变父类原有的功能。
  - 子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法。
  - 子类可以增加自己特有的方法。
  - 当子类方法重载父类的方法时，方法的前置条件（即方法的输入/入参）要比父类方法
  的输入参数更宽松
  - 当子类方法实现父类的方法时（重写/重载或实现抽象方法），方法的后置条件（即方法
  的输出/返回值）要比父类更严格或和父类一样。

### 作用
- 里氏替换原则是实现开闭原则的重要方式之一。
- 它克服了继承中重写父类造成的可复用性变差的缺点。
- 它是动作正确性的保证。即类的扩展不会给已有的系统引入新的错误，降低了代码出错的可能性。
- 约束继承泛滥，是开闭原则的一种体现
- 加强程序的健壮性，同时变更时也可以做到非常好的兼容性，提高程序的可维护性和扩展性，
降低需求变更时引入的风险。

### 应用示例
- 示例：
用正方形、矩形、四边形的关系说明里氏替换原则