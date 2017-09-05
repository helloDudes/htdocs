<?php
require 'calculator.php';
use PHPUnit\Framework\TestCase;
 
class FirstTests extends TestCase
{
    private $calculator;
 
    protected function setUp()
    {
        $this->calculator = new Calculator();
    }

    public function testAdd()
    {
        $result = $this->calculator->add(1, 2, 3);
        $this->assertEquals(6, $result);
		return $result;
    }
	public function testAddS()
	{
		$this->assertEquals(7, 7);
		$resultS = 5;
		return $resultS;
	}
	/**
     * @depends testAdd
	 * @depends testAddS
     */
	public function testAdd2($result, $resultS)
	{
		$result2 = $result + 1;
		$this->assertEquals(7, $result2);
		$this->assertEquals(5, $resultS);
	}
	
	protected function tearDown()
    {
        $this->calculator = NULL;
    }
	public function additionProvider()
	{
		return [
			[0, 0, 0],
			[0, 1, 0],
			[1, 1, 1],
			[1, 2, 2],
			[2, 2, 4],
			[2, 2, 5]
		];
	}
	/**
     * @dataProvider additionProvider
     */
	public function testMult($a, $b, $m)
	{
		$this->assertEquals($a*$b, $m);
	}

}
?>